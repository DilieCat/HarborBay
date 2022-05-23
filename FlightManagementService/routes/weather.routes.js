const router = require('express').Router();

const weather = require('../controllers/weather.controller');

router.get('/', weather.getWeather);


router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;