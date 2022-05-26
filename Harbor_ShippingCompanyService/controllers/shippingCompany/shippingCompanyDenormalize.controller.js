const ShippingCompanyRead = require('../../models/shippingCompany/shippingCompanyRead.model');

const ShippingCompanyCreate = (shippingCompany) => {
  const shippingCompanyNew = new ShippingCompanyRead(shippingCompany);

  shippingCompanyNew.save((err) => {
    if (err) console.error(err);
  });
};

const ShippingCompanyUpdate = (shippingCompany) => {
  ShippingCompanyRead.findByIdAndUpdate(fueltank._id, { $set: shippingCompany }, (err) => {
    if (err) console.error(err);
  });
};

const ShippingCompanyDelete = (shippingCompany) => {
  ShippingCompanyRead.findByIdAndRemove(shippingCompany._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  ShippingCompanyCreate,
  ShippingCompanyUpdate,
  ShippingCompanyDelete,
};
