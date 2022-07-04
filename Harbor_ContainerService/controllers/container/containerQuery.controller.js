const ContainerRead = require('../../models/container/containerRead.model');

const ContainerOne = (req, res, next) => {
  ContainerRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const ContainerGetAll = (req, res, next) => {
  ContainerRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    ContainerOne,
    ContainerGetAll,
};
