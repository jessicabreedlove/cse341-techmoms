const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Go Tech Moms!!!');
});

module.exports = routes;
