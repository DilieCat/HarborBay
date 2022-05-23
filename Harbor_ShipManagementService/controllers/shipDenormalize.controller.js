const ShipRead = require('../models/shipRead.model');

const ShipCreate = (ship) => {
  const shipNew = new ShipRead(ship);

  shipNew.save((err) => {
    if (err) console.error(err);
  });
};

const ShipUpdate = (ship) => {
  ShipRead.findByIdAndUpdate(fueltank._id, { $set: ship }, (err) => {
    if (err) console.error(err);
  });
};

const ShipDelete = (ship) => {
  ShipRead.findByIdAndRemove(ship._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
  ShipCreate,
  ShipUpdate,
  ShipDelete,
};
