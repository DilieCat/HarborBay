const OutboundRead = require('../models/outboundRead.model');

const OutboundOne = (req, res, next) => {
  OutboundRead.findById(req.params.id).populate('ship').exec((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const OutboundGetAll = (req, res, next) => {
  OutboundRead.find().populate('ship').exec((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
  OutboundOne,
    OutboundGetAll,
};
