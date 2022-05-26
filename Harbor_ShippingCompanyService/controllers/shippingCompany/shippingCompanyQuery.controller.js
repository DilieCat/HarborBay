const ShippingCompanyRead = require('../../models/shippingCompany/shippingCompanyRead.model');

const ShippingCompanyOne = (req, res, next) => {
  ShippingCompanyRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const ShippingCompanyGetAll = (req, res, next) => {
  ShippingCompanyRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    ShippingCompanyOne,
    ShippingCompanyGetAll,
};
