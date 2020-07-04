const MovieRepository = require('../repositories/MovieRepository');

class MovieFindService {
  async execute(censorship) {
    const findMovie = await MovieRepository.findAll(censorship);

    return findMovie;
  }
};

module.exports = new MovieFindService();