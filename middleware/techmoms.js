const mongodb = require('../config/db');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  /*
  #swagger.description = 'This is the description of my api'
  */
  const result = await mongodb.getCollection().find();
  console.log(result);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getCollection().find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createTechmom = async (req, res) => {
  const techmom = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    title: req.body.title,
    seekingJobTitle: req.body.seekingJobTitle,
    headline: req.body.headline,
  };
  const response = await mongodb.getCollection().insertOne(techmom);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || 'Some error occurred while creating the contact.'
      );
  }
};

const updateTechmom = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const techmom = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    state: req.body.state,
    title: req.body.title,
    seekingJobTitle: req.body.seekingJobTitle,
    headline: req.body.headline,
  };
  const response = await mongodb
    .getCollection()
    .replaceOne({ _id: userId }, techmom);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || 'Some error occurred while updating the contact.'
      );
  }
};

const deleteTechmom = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getCollection().remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || 'Some error occurred while deleting the contact.'
      );
  }
};

module.exports = {
  getAll,
  getSingle,
  createTechmom,
  updateTechmom,
  deleteTechmom,
};
