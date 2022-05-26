const RentalAgreement = require('../../models/rentalAgreement/rentalAgreement.model');
const MQService = require('../../utils/MQService.utils');

const RentalAgreementCreate = (req, res, next) => {
  const newRentalAgreement = new RentalAgreement({
    ship: req.body.ship,
    shippingCompany: req.body.shippingCompany,
    dock: req.body.dock,
    dateArrival: req.body.dateArrival,
    dateDeparture: req.body.dateDeparture
  });

  newRentalAgreement.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'dock',
      JSON.stringify({ eventType: 'dockRented', object: newRentalAgreement })
    );
    
      /*
    await MQService.sendMessage(
      'flight',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );*/

    return res.status(200).json(newRentalAgreement).end();
  });
};

const RentalAgreementUpdate = async (req, res, next) => {
  RentalAgreement.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'dock',
      JSON.stringify({
        eventType: 'dockRentalUpdated',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const RentalAgreementDelete = (req, res, next) => {
  RentalAgreement.findByIdAndRemove(req.params.id, async (err, rentalAgreement) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'dock',
      JSON.stringify({ eventType: 'dockRentalCancelled', object: rentalAgreement })
    );
    return res.status(200).json('RentalAgreement removed.').end();
  });
};

module.exports = {
    RentalAgreementCreate,
    RentalAgreementUpdate,
    RentalAgreementDelete
};
