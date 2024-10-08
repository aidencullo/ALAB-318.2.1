const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(timeLogger);
app.use(typeLogger);

function typeLogger(req, res, next) {
  console.log(`Request type: ${req.method}`);
  next();
}

function timeLogger(req, res, next) {
  console.log(`Request received at ${new Date()}`);
  next();
}

function logger(req, res, next) {
  console.log(`Request received for ${req.url}`);
  next();
}

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

app.get('/image', (req, res) => {
  res.render('image');
});

app.get('/download-image', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'images', 'example.jpg');
  res.download(filePath);
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
