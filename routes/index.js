const routes = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc  Login/landing page
// @route GET /
routes.get('/', ensureGuest, (req, res, next) => {
  res.render('login', {
    layout: 'login',
  });
  next();
});

// @desc  Dashboard page
// @route GET /dashboard
routes.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard');
});

// @desc  Techmoms Contacts page
// @route GET /techmoms

routes.use('/techmoms', require('./techmoms'));

// @desc  Employers Contact page
// @route GET /employers
routes.get('/employers', ensureAuth, require('./employers'));

module.exports = routes;
