const express = require('express');
const routes = require('../routes');
const apiRoutes = require('../routes/api');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/public', express.static('public'));

app.use('/api', apiRoutes);
app.use('/', routes);


module.exports = app;