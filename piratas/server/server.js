const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
 
//Connect Mongo Atlas
//require('./server/config/connectMongo')();
require('./config/mongoose.config')
 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes')(app); 

const port = 8000;
app.listen(port, () => {
    console.log("Servidor Conectado a puerto "+port);
})

