const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);


module.exports = routes;
