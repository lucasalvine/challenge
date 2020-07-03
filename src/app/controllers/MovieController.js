const MovieRepository = require('../repositories/MovieRepository');
const MovieValidator = require('../validations/MovieValidator');

class MovieController {
  async store(request, response) {
    const {
      movieName,
      releaseDate,
      censorship,
      director,
      casting
    } = request.body;

    const movie = {
      movieName,
      releaseDate,
      censorship,
      director,
      casting
    };

    const validatedMovie = MovieValidator.lengthCasting(movie.casting);
    const validatedMoviesNames = MovieValidator.compareMoviesNames(movie.movieName);
    console.log("VALIDATOR NAME", validatedMoviesNames);

    validatedMovie && validatedMoviesNames ?
      await MovieRepository.save(movie) :
      response.status(400).json({ message: "Can not save the movie" });

    response.status(200).json({ message: "Save it" });
  };

  async index(request, response) {
    const movies = await MovieRepository.findAll(request.query.censorship);

    if (!movies[0]) {
      return response.status(400).json({ message: "Can not find movies with this consorship" });
    } else {
      return response.json({
        movies: movies,
      });
    };
  };
};

module.exports = new MovieController();