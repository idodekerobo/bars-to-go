// =====================================================
// APP REQUIREMENTS
// =====================================================
const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');

// =====================================================
// APP VARIABLES
// =====================================================
const app = express();
const db = require('./models/index');
const PORT = process.env.PORT || 2121;

// =====================================================
// APP MIDDLEWARE
// =====================================================
// INIT EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// USE BODYPARSER
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// SERVING STATIC FILES
app.use('/public',express.static(path.join(__dirname,'/public')));

// =====================================================
// APP ROUTES
// =====================================================
app.get('/', (req, res) => {
   res.render('index');
});

app.post('/post', (req, res) => {

   const newLyric = new db.Lyric(req.body);
   newLyric.save()
   .then(result => {
      console.log(result);
      res.redirect('/');
   })
   .catch(err => {
      res.send(err);
   })
   // res.render('index');
})

// =====================================================
// HAVE APP LISTEN ON SERVER
// =====================================================
app.listen(PORT, () => {
   console.log(`listening on port ${PORT}.`);
})