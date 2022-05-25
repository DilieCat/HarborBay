const Ship = require('../../models/ship/ship.model');

const ShipCreate = (ship) => {
  const shipNew = new Ship(ship);

  shipNew.save((err) => {
    if (err) console.error(err);
  });
};

const ShipUpdate = (ship) => {
  Ship.findByIdAndUpdate(fueltank._id, { $set: ship }, (err) => {
    if (err) console.error(err);
  });
};

const ShipDelete = (ship) => {
  Ship.findByIdAndRemove(ship._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  ShipCreate,
  ShipUpdate,
  ShipDelete,
};
