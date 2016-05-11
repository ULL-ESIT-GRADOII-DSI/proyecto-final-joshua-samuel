"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const usu = require('./models/schema_puntuaciones');

app.set('port', (process.env.PORT || 8080));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/puntuaciones/:nombre', (res,req) => {
  
  let usr = new usu({
    "name": req.nombre,
    "punt": req.query.puntu
  }); 
    
  usr.save(function (err) {
      
    if(err) {
      console.log(`Error:\n ${err}`);
      return err
    }
    console.log(`Guardado: ${usr}`);  
  });
    
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
