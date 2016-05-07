"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 8080));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
