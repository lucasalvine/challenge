const Sequelize = require('sequelize');

const Movie = require('../app/models/movie');

const databaseConfig = require('../config/database');

const models = [Movie];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();