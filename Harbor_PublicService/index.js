const express = require('express');
const bodyParser = require('body-parser');

const publicRoutes = require('./routes/public.route');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/public', publicRoutes);

app.listen(port, () => {
  console.info(`Started Ship on port ${port}`);
});