const ShipRead = require('../models/shipRead.model');

const ShipUpdate = (ship) => {
  ShipRead.findByIdAndUpdate(fueltank._id, { $set: ship }, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
  ShipUpdate
};
