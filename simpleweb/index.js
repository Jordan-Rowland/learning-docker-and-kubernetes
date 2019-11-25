/* jshint esversion: 6 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Wassup duder');
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
