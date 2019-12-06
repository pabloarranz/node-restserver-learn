var express = require('express');
var app = express();
var bodyParser = require('body-parser');

require('./config/config')
var port = process.env.PORT;

// MIDDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  // res.send('hello world');
  res.json('hello world');
});


app.get('/usuario', function(req, res) {
    res.json('get Usuario...');
  });

  
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: `El nombre es necesario`
        })

    } else {

        res.json({
            persona: body
        });
    }

  });

  app.put('/usuario/:id', function(req, res) {
      let id = req.params.id;

    res.json({
        id
    });
  });

  app.delete('/usuario', function(req, res) {
    res.json('delete Usuario...');
  });

app.listen(port, () => {
    console.log(`Ecuchando puerto: ${port}`);
})