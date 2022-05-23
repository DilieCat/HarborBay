const express = require('express');
const bodyParser = require('body-parser');

const FlightRoutes = require('./routes/flight.routes');
const WeatherRoutes = require('./routes/weather.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));
app.use('/flight', FlightRoutes);
app.use('/weather', WeatherRoutes);
// app.use('/airside/taxiway', TaxiwayRoutes);

app.listen(port, () => {
  console.info(`Started FlightManagement on port ${port}`);
});
