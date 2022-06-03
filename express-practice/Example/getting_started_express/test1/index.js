const express = require('express');
const path = require('path');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// listining on a port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});