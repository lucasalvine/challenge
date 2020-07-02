const { Router } = require('express');
const MovieController = require('./app/controllers/MovieController');

const routes = new Router();

routes.post('/movies', MovieController.store);
routes.get('/movies', MovieController.index);

module.exports = routes;