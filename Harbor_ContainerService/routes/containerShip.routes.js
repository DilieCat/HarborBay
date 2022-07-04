const router = require('express').Router();

//auxillary fuel tanks
// const containerShipCommand = require('../controllers/ship/ContainerShipCommand.controller');
const containerShipQuery = require('../controllers/ship/ContainerShipQuery.controller');

//command instructions

// command
// router.post('/', shipCommand.ShipCreate);
// router.put('/:id', containerShipCommand.ContainerShipUpdate);
// router.delete('/:id', shipCommand.ShipDelete);

// query
router.get('/:id', containerShipQuery.ContainerShipOne);
router.get('/', containerShipQuery.ContainerShipGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
