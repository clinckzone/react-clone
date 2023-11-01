const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define a route that sends the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
