const RentalAgreementRead = require('../../models/rentalAgreement/rentalAgreementRead.model');

const RentalAgreementOne = (req, res, next) => {
  RentalAgreementRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const RentalAgreementGetAll = (req, res, next) => {
  RentalAgreementRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    RentalAgreementOne,
    RentalAgreementGetAll,
};
