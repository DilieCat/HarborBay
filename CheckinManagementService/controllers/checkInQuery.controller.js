  
const CheckInReadModel = require('../models/checkinRead.model');

const CheckInRead = (req, res, next) => {
    CheckInReadModel.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const CheckInGetAll = (req, res, next) => {
    CheckInReadModel.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    CheckInRead,
    CheckInGetAll,
};