const MovieRepository = require('../repositories/MovieRepository');

class MovieValidators {
  lengthCasting(casting) {
    return casting.length <= 10;
  };

  async compareMoviesNames(movie) {
    await MovieRepository.findByName(movie);
  }
};

module.exports = new MovieValidators();