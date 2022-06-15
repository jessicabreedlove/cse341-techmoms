const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getCollection().find();
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

const createEmployer = async (req, res) => {
  const employer = {
    companyName: req.body.companyName,
    companyLocation: req.body.companyLocation,
    companySite: req.body.companySite,
    remote: req.body.remote,
  };
  const response = await mongodb.getCollection().insertOne(employer);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error ||
          'Some error occurred while creating the employer contact.'
      );
  }
};

const updateEmployer = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const employer = {
    companyName: req.body.companyName,
    companyLocation: req.body.companyLocation,
    companySite: req.body.companySite,
    remote: req.body.remote,
  };
  const response = await mongodb
    .getCollection()
    .replaceOne({ _id: userId }, employer);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          'Some error occurred while updating the employer contact.'
      );
  }
};

const deleteEmployer = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getCollection().remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          'Some error occurred while deleting the employer contact.'
      );
  }
};

module.exports = {
  getAll,
  getSingle,
  createEmployer,
  updateEmployer,
  deleteEmployer,
};
