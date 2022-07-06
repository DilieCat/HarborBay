const router = require('express').Router();

const reportController = require('../controllers/report.controller');

//query
router.get('/', reportController.getReport);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
