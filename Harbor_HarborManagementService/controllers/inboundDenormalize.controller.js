const InboundRead = require('../models/inboundRead.model');

const InboundCreate = (inbound) => {
  const newInbound = new InboundRead(inbound);

  newInbound.save((err) => {
    if (err) console.error(err);
  });
};

const InboundUpdate = (inbound) => {
  InboundRead.findByIdAndUpdate(inbound._id, { $set: inbound }, (err) => {
    if (err) console.error(err);
  });
};

const InboundDelete = (inbound) => {
  console.log(inbound)
  InboundRead.findByIdAndRemove(inbound._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  InboundCreate,
  InboundUpdate,
  InboundDelete,
};
