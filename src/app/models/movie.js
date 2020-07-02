const { Model, Sequelize } = require('sequelize');

class Movie extends Model {
  static init(sequelize) {
    super.init({
      movieName: Sequelize.STRING,
      releaseDate: Sequelize.DATE,
      censorship: Sequelize.BOOLEAN,
      director: Sequelize.STRING,
      casting: Sequelize.STRING
    }, {
      sequelize,
    });
    return this;
  };
}

module.exports = Movie;