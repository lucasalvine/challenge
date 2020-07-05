const MovieCreateService = require('../services/MovieCreateService');
const MovieFindService = require('../services/MovieFindService');

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

    const saveMovie = await MovieCreateService.execute(movie)
      .catch(function (err) {
        response.status(404).render({
          message: err.parent.detail
        });
        return;
      });

    if (!saveMovie) {
      response.status(404).json({
        message: 'Can not save the movie, the casting is greater than 10'
      });
      return;
    };

    return response.status(201).json({
      ...movie,
    });
  };

  async index(request, response) {
    const movies = await MovieFindService.execute(request.query.censorship);

    if (!movies[0]) {
      response.status(404).json({
        message: "Can not find movies with this censorship"
      });
      return;
    };

    return response.status(201).json({
      movies: movies,
    });
  };
};

module.exports = new MovieController();