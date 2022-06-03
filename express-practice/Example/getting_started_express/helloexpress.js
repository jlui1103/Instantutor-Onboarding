const express = require("express");

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// listining on a port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});