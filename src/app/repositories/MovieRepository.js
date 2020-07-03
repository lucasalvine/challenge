
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

  };

  async findAll(request) {
    const movies = await Movie.findAll({
      where: {
        censorship: request
      }
    });

    return movies;
  };

  async findByName(movieName) {
    return await Movie.findAll({
      where: {
        movieName: movieName
      }
    }).then(function (docs) {
      if (!docs.length) {
        console.log("USUARIO nao CADASTRADO");
      } else {
        console.log("USURIO CADASTRADO")
      }
    });
  };
}

module.exports = new MovieRepository();