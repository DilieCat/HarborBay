const OutboundRead = require('../models/outboundRead.model');

const OutboundCreate = (Outbound) => {
  const newOutbound = new OutboundRead(Outbound);

  newOutbound.save((err) => {
    if (err) console.error(err);
  });
};

const OutboundUpdate = (Outbound) => {
  OutboundRead.findByIdAndUpdate(Outbound._id, { $set: Outbound }, (err) => {
    if (err) console.error(err);
  });
};

const OutboundDelete = (Outbound) => {
  console.log(Outbound)
  OutboundRead.findByIdAndRemove(Outbound._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  OutboundCreate,
  OutboundUpdate,
  OutboundDelete,
};
