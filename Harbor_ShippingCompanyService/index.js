const express = require('express');
const bodyParser = require('body-parser');

const shippingCompany = require('./routes/shippingCompany.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/company', shippingCompany);

app.listen(port, () => {
  console.info(`Started ShippingCompanyService on port ${port}`);
});