const express = require('express');
const bodyParser = require('body-parser');

const rentalAgreementRoutes = require('./routes/rentalAgreement.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/rental', rentalAgreementRoutes);

app.listen(port, () => {
  console.info(`Started DockRental on port ${port}`);
});