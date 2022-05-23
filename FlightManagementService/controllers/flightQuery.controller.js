const axios=require('axios');
const FlightReadModel = require('../models/flightRead.model');

const FlightRead = (req, res, next) => {
    FlightReadModel.findById(req.params.id).populate('Airplane').exec((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const FlightGetAll = (req, res, next) => {
    FlightReadModel.find().populate('Airplane').exec((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    FlightRead,
    FlightGetAll,
};