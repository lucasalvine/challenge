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
        return response.status(404).json({
          error: 404,
          message: err.parent.detail
        });
      });

    if (!saveMovie) {
      response.status(404).json({
        error: 404,
        message: 'Can not save the movie, the casting is greater than 10'
      });
    };

    return response.json({
      status: 201,
      ...movie,
    });
  };

  async index(request, response) {
    const movies = await MovieFindService.execute(request.query.censorship);

    if (!movies[0]) {
      return response.status(404).json({
        error: 404,
        message: "Can not find movies with this censorship"
      });
    };

    return response.json({
      status: 201,
      movies: movies,
    });
  };
};

module.exports = new MovieController();