const router = require('express').Router();

//auxillary fuel tanks
const publicQuery = require('../controllers/publicQuery.controller');

//command instructions

// query
router.get('/', publicQuery.PublicGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
