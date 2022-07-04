const ContainerShipRead = require('../../models/containerShip/containerShipRead.model');

const ContainerShipOne = (req, res, next) => {
  ContainerShipRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const ContainerShipGetAll = (req, res, next) => {
  ContainerShipRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
  ContainerShipOne,
  ContainerShipGetAll,
};
