const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/asset', (req, res) => {
  res.render('asset');
});

app.get('/emp', (req, res) => {
  res.render('emp');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
