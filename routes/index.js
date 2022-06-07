const routes = require('express').Router();

// @desc  Login/landing page
// @route GET /
routes.get('/', (req, res) => {
  res.render('login', {
    layout: 'login',
  });
});

// @desc  Dashboard page
// @route GET /dashboard
routes.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = routes;
