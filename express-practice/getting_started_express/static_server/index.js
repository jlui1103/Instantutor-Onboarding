const express = require('express');
const path = require('path');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// Setting a static server (.use() is a method to use when including middleware)
app.use(express.static(path.join(__dirname, 'public')));

// listining on a port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});