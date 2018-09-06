const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/register',(req,res,next)=>{
    res.send('index');
})

router.post('/authenticate',()=>{

})

module.exports = router;