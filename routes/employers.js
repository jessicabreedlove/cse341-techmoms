const express = require('express');
const routes = express.Router();

const employersController = require('../middleware/employers');

// @desc  Retrieve all Employer contacts
// @route GET /
routes.get('/', employersController.getAll);

// @desc  Retrieve a specific Employer contact
// @route GET /:id
routes.get('/:id', employersController.getSingle);

// @desc  Create new Employer contact
// @route POST /
routes.post('/', employersController.createEmployer);

// @desc  Update a specific Employer contact
// @route PUT /:id
routes.put('/:id', employersController.updateEmployer);

// @desc  Delete a specific Employer contact
// @route DELETE /:id
routes.delete('/:id', employersController.deleteEmployer);

module.exports = routes;
