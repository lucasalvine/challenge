const Movie = require('../models/Movie');

class MovieRepository {
  async save(request) {
    const movie_save = await Movie.create({
      movieName: request.movieName,
      releaseDate: new Date(request.releaseDate).getTime(),
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