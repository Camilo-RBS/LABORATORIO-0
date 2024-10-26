require('dotenv').config(); 

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: false }));


app.use('/', routes);


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Servidor en marcha en el puerto ${PORT}`);
});
