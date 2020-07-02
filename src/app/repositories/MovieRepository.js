const Movie = require('../models/movie');

class MovieRepository {
  async save() {
    await Movie.create();
  }
}