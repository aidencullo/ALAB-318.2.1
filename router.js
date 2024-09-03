const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
