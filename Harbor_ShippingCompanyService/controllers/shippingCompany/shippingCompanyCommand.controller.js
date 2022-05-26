const ShippingCompany = require('../../models/shippingCompany/shippingCompany.model');
const MQService = require('../../utils/MQService.utils');

const ShippingCompanyCreate = (req, res, next) => {
  const newShippingCompany = new ShippingCompany({
    name: req.body.name,
    ships: req.body.ships
  });

  newShippingCompany.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'company',
      JSON.stringify({ eventType: 'shippingCompanyCreated', object: newShippingCompany })
    );
    
    await MQService.sendMessage(
      'dock',
      JSON.stringify({ eventType: 'shippingCompanyCreated', object: newShippingCompany })
    );
    
      /*
    await MQService.sendMessage(
      'flight',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );*/

    return res.status(200).json(newShippingCompany).end();
  });
};

const ShippingCompanyUpdate = async (req, res, next) => {
  ShippingCompany.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'company',
      JSON.stringify({
        eventType: 'shippingCompanyUpdated',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'dock',
      JSON.stringify({
        eventType: 'shippingCompanyUpdated',
        object: { _id: req.params.id, ...req.body },
      })
    );

    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const ShippingCompanyDelete = (req, res, next) => {
  ShippingCompany.findByIdAndRemove(req.params.id, async (err, shippingCompany) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'company',
      JSON.stringify({ eventType: 'shippingCompanyRemoved', object: shippingCompany })
    );

    await MQService.sendMessage(
      'dock',
      JSON.stringify({ eventType: 'shippingCompanyRemoved', object: shippingCompany })
    );
    
    return res.status(200).json('ShippingCompany removed.').end();
  });
};

module.exports = {
    ShippingCompanyCreate,
    ShippingCompanyUpdate,
    ShippingCompanyDelete
};
