const router = require('express').Router();

//auxillary fuel tanks
const shippingCompanyCommand = require('../controllers/shippingCompany/shippingCompanyCommand.controller');
const shippingCompanyQuery = require('../controllers/shippingCompany/shippingCompanyQuery.controller');

//command instructions

// command
router.post('/', shippingCompanyCommand.ShippingCompanyCreate);
router.put('/:id', shippingCompanyCommand.ShippingCompanyUpdate);
router.delete('/:id', shippingCompanyCommand.ShippingCompanyDelete);

// query
router.get('/:id', shippingCompanyQuery.ShippingCompanyOne);
router.get('/', shippingCompanyQuery.ShippingCompanyGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
