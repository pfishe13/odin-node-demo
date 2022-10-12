const express = require('express');
const app = express();
const port = 3000;

app.get('/', (reg, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (reg, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', (reg, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/404.html'));
});
