const ContainerRead = require('../../models/container/containerRead.model');

const ContainerCreate = (container) => {
  const containerNew = new ContainerRead(container);
  containerNew.save((err) => {
    if (err) console.error(err);
  });
};

const ContainerUpdate = (container) => {
  ContainerRead.findByIdAndUpdate(fueltank._id, { $set: container }, (err) => {
    if (err) console.error(err);
  });
};

const ContainerDelete = (container) => {
  ContainerRead.findByIdAndRemove(container._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  ContainerCreate,
  ContainerUpdate,
  ContainerDelete,
};
