const express = require('express');
const path = require('path');
const members = require('./members');
const logger = require('./middleware/logger');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
/*const logger = (req, res, next) => {
    // Logging the url
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}*/

// initializing middleware
app.use(logger);

// Creating a REST API
/*const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'jhon@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        emails: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
];*/

app.get('/api/members', (req, res) => res.json(members));

// Setting a static server (.use() is a method to use when including middleware)
app.use(express.static(path.join(__dirname, 'public')));

// listining on a port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});