const express = require('express');
const bodyParser = require('body-parser');

const GateRoutes = require('./routes/gate.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/gate', GateRoutes);
// app.use('/airside/runway', RunwayRoutes);
// app.use('/airside/taxiway', TaxiwayRoutes);

app.listen(port, () => {
  console.info(`Started GateManagement on port ${port}`);
});