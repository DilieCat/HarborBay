const InboundRead = require('../models/inboundRead.model');

const InboundOne = (req, res, next) => {
  InboundRead.findById(req.params.id).populate('ship').exec((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const InboundGetAll = (req, res, next) => {
  InboundRead.find().populate('ship').exec((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
  InboundOne,
    InboundGetAll,
};
