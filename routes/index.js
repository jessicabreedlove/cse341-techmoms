const routes = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc  Login/landing page
// @route GET /
routes.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  });
});

// @desc  Dashboard page
// @route GET /dashboard
routes.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard');
});

module.exports = routes;
