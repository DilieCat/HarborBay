const Ship = require('../../models/ship/ship.model');
const ContainerShip = require('../../models/containerShip/containerShip.model');

const ContainerShipCreate = (ship) => {
  const partialShip = new Ship(ship);
  const shipNew = new ContainerShip({
    ship: req.body.ship,
    containersOnBoard: []
  })

  shipNew.save((err) => {
    if (err) console.error(err);
  });
};

const ContainerShipUpdate = (ship) => {
  Ship.findByIdAndUpdate(fueltank._id, { $set: ship }, (err) => {
    if (err) console.error(err);
  });
};

const ContainerShipDelete = (ship) => {
  Ship.findByIdAndRemove(ship._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  ContainerShipCreate,
  ContainerShipUpdate,
  ContainerShipDelete,
};
