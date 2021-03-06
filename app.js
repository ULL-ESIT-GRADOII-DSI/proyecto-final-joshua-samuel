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
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(req,res) {
  res.render('index');
});

app.get('/puntu', function(req,res) {
  res.render('punt');
});

app.get('/puntuaciones/:nombre', function(req,res) {
  
  let usr = new usu({
    "name": req.params.nombre,
    "punt": req.query.punt
  }); 
    
  usr.save(function (err) {
      
    if(err) {
      console.log(`Error:\n ${err}`);
      return err
    }
    console.log(`Guardado: ${usr}`);  
  });
    
});

app.get('/mostrar', function(req, res){
  
    usu.find({}, function(err, data){
      
      if(err) throw err;
      
      console.log(data);
      res.send(data);
      
    });
    
});

app.listen(app.get('port'), function() {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
