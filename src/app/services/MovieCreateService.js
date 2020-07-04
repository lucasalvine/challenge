const MovieRepository = require('../repositories/MovieRepository');
const MovieValidator = require('../helpers/MovieValidator');

class MovieCreateService {
  async execute(movie) {

    const validatedMovie = MovieValidator.lengthCasting(movie.casting);

    if (validatedMovie) {
      return await MovieRepository.save(movie);
    }
  }
}

module.exports = new MovieCreateService();