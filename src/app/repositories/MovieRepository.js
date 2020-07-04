const Movie = require('../models/movie');

class MovieRepository {
  async save(request, response) {
    const movie_save = await Movie.create({
      movieName: request.movieName,
      releaseDate: request.releaseDate,
      censorship: request.censorship,
      director: request.director,
      casting: request.casting
    });

    return movie_save;

  };

  async findAll(request) {
    const movies = await Movie.findAll({
      where: {
        censorship: request
      }
    });

    return movies;
  };
}

module.exports = new MovieRepository();