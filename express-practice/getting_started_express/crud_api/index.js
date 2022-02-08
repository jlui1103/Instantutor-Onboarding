const express = require('express');
const { parse } = require('path');
const path = require('path');
const members = require('./members');
const logger = require('./middleware/logger');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser Middleware for json and url encoded data
app.use(express.json());
app.use(express.urlencoded({ 'extended': 'false' }));

// Logger middleware
app.use(logger);

// Members api
app.use('/api/members', require('./routes/api/crud'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
  });