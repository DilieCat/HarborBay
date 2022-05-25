const InboundRead = require('../models/inboundRead.model');
const OutboundRead = require('../models/outboundRead.model');

const PublicGetAll = (req, res, next) => {
  InboundRead.find().populate('ship').exec((err, obj) => {
    console.log(obj)
    if (err) return next(err);
    OutboundRead.find().populate('ship').exec((error, object) => {
      console.log(object)
      if (error) return next(err);
      return res.status(200).json(obj.concat(object)).end();
    });
  });
  
};

module.exports = {
    PublicGetAll
};
