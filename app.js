const express = require('express');
const path = require('path');
const app = express();
const routes = require('./Parcial02-Ejercicio01/routes/routes');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/Parcial02-Ejercicio01/views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: false }));


app.use('/', routes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en marcha en el puerto ${PORT}`);
});
