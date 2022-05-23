const AirplaneRead = require('../models/airplaneRead.model');

const AirplaneOne = (req, res, next) => {
  AirplaneRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const AirplaneGetAll = (req, res, next) => {
  AirplaneRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    AirplaneOne,
    AirplaneGetAll,
};
