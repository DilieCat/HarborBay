const router = require('express').Router();

//auxillary fuel tanks
const shipCommand = require('../controllers/shipCommand.controller');
const shipQuery = require('../controllers/shipQuery.controller');

//command instructions

// command
router.post('/', shipCommand.ShipCreate);
router.put('/:id', shipCommand.ShipUpdate);
router.delete('/:id', shipCommand.ShipDelete);

// query
router.get('/:id', shipQuery.ShipOne);
router.get('/', shipQuery.ShipGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
