const ShipRead = require('../models/shipRead.model');

const ShipOne = (req, res, next) => {
  ShipRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const ShipGetAll = (req, res, next) => {
  ShipRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    ShipOne,
    ShipGetAll,
};
