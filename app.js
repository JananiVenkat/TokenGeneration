const express = require('express');

const app = express();

app.use('/auth', require('./auth'));

app.use((req, res) => {
  res.status(404).send({ error: "Resource not found" });
});
app.listen('3000');

module.exports = app;
