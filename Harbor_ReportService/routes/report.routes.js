const router = require('express').Router();

//auxillary fuel tanks
const reportCommand = require('../controllers/report/reportCommand.controller');
const reportQuery = require('../controllers/report/reportQuery.controller');

//command instructions

// command
router.post('/', reportCommand.ReportCreate);
router.delete('/:id', reportCommand.ReportDelete);

// query
router.get('/:id', reportQuery.ReportOne);
router.get('/', reportQuery.ReportGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
