require('./config/config')

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// ===============================
// Puerto
// ===============================
const port = process.env.PORT;

// ===============================
// Base de datos MongoDb
// ===============================
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  userCreateIndex: true,
  useUnifiedTopology: true
}, (err, res) => {
  if (err) throw err;
  console.log(`Base de datos ONLINE`);
});

// ===============================
// Rutas
// ===============================
const rootRoutes = require('./routes/root');
const usuarioRoutes = require('./routes/usuario');

// ===============================
// Middleware
// ===============================
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use( rootRoutes );
app.use( usuarioRoutes );

app.listen(port , () => {
  console.log(`Ecuchando puerto: ${port}`);
})