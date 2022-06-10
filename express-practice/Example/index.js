const express = require('express');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger');

app.use(logger);

// Body parser middleware
app.use(express.json())

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))