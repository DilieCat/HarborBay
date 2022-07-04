const router = require('express').Router();

//auxillary fuel tanks
const outboundCommand = require('../controllers/outboundCommand.controller');
const outboundQuery = require('../controllers/outboundQuery.controller');

//command instructions

// command
router.post('/', outboundCommand.OutboundCreate);
router.put('/:id', outboundCommand.OutboundUpdate);
router.delete('/:id', outboundCommand.OutboundDelete);

// query
router.get('/:id', outboundQuery.OutboundOne);
router.get('/', outboundQuery.OutboundGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
