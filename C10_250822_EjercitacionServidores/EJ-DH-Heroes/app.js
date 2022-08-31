const express = require('express');
const path = require('path');
const { clearScreenDown } = require('readline');

const app = express();

app.use(express.static('public'));

app.listen(3030,() =>{
    console.log('Servidor corriendo en el 3030')
})

app.get('/',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'views/index.html'))
    //res.sendFile(path.resolve('./views/index.html'))
} )

app.get('/babbage',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'views/babbage.html'))
    //res.sendFile(path.resolve('./views/index.html'))
} )
