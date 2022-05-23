const GateReadModel = require('../models/gateRead.model');

const gateRead = (req, res, next) => {
    GateReadModel.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const gateGetAll = (req, res, next) => {
    GateReadModel.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    gateRead,
    gateGetAll,
};