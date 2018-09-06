const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const port = 3000;

const users = require('./routes/users');

app.use(express());

app.use(cors());

app.use(bodyParser.json());

app.listen(port,function(req , res, next){
    console.log('Server Started On port :'+port)
})

app.get('/',(req, res, next)=>{
    res.send('Index');
})

app.use('/users',users);