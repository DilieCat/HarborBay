const RentalAgreementRead = require('../../models/rentalAgreement/rentalAgreementRead.model');

const RentalAgreementCreate = (rentalAgreement) => {
  const rentalAgreementNew = new RentalAgreementRead(rentalAgreement);

  rentalAgreementNew.save((err) => {
    if (err) console.error(err);
  });
};

const RentalAgreementUpdate = (rentalAgreement) => {
  RentalAgreementRead.findByIdAndUpdate(fueltank._id, { $set: rentalAgreement }, (err) => {
    if (err) console.error(err);
  });
};

const RentalAgreementDelete = (rentalAgreement) => {
  RentalAgreementRead.findByIdAndRemove(rentalAgreement._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  RentalAgreementCreate,
  RentalAgreementUpdate,
  RentalAgreementDelete,
};
