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

// @desc  Techmoms Contacts page
// @route GET /techmoms
// routes.get('/techmoms', ensureAuth, (req, res) => {
//   res.render('techmoms');
// });

routes.use('/techmoms', require('./techmoms'));

// @desc  Employers Contact page
// @route GET /employers
routes.get('/employers', ensureAuth, (req, res) => {
  res.render('employers');
});

module.exports = routes;
