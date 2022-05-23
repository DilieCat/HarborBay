const GateRead = require('../models/gateRead.model');

const GateCreate = (gate) => {
  const gateNew = new GateRead(gate);

  gateNew.save((err) => {
    if (err) console.error(err);
  });
};

const GateUpdate = (gate) => {
    GateRead.findByIdAndUpdate(gate._id, { $set: gate }, (err) => {
    if (err) console.error(err);
  });
};

const GateDelete = (gate) => {
    GateRead.findByIdAndRemove(gate._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
    GateCreate,
    GateUpdate,
    GateDelete,
};