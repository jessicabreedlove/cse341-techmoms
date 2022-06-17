const express = require('express');
const routes = express.Router();

const techmomsController = require('../middleware/techmoms');

// @desc  Retrieve all techmom contacts
// @route GET /
routes.get('/', techmomsController.getAll);

// @desc  Retrieve a specific techmom contact
// @route GET /:id
routes.get('/:id', techmomsController.getSingle);

// @desc  Create new techmom contact
// @route POST /
routes.post('/', techmomsController.createTechmom);

// @desc  Update a specific techmom contact
// @route PUT /
routes.put('/:id', techmomsController.updateTechmom);

// @desc  Delete a specific techmom contact
// @route DELETE /
routes.delete('/:id', techmomsController.deleteTechmom);

module.exports = routes;
