const router = require('express').Router();

//auxillary fuel tanks
const rentalAgreementCommand = require('../controllers/rentalAgreement/rentalAgreementCommand.controller');
const rentalAgreementQuery = require('../controllers/rentalAgreement/rentalAgreementQuery.controller');

//command instructions

// command
router.post('/', rentalAgreementCommand.RentalAgreementCreate);
router.put('/:id', rentalAgreementCommand.RentalAgreementUpdate);
router.delete('/:id', rentalAgreementCommand.RentalAgreementDelete);

// query
router.get('/:id', rentalAgreementQuery.RentalAgreementOne);
router.get('/', rentalAgreementQuery.RentalAgreementGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
