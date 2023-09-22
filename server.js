
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//link the css file to the head.ejs
app.use(express.static(__dirname))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// products page
app.get('/gallery', function(req, res) {
  res.render('pages/gallery');
});

// contact page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.listen(8080);
console.log('Server is listening on port 8080');
