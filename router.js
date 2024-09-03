const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const name = "Aiden";
  res.render('index', { name: name });
});

app.get('/greet/:name', (req, res) => {
  res.render('greeting', { name: req.params.name });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
