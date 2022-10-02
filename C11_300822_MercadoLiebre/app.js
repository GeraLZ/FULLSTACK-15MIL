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
    res.sendFile(path.resolve(__dirname,'src/views/home.html'))
    //res.sendFile(path.resolve('./views/index.html'))
} )

app.get('/registro',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'src/views/registro.html'))
    //res.sendFile(path.resolve('./views/index.html'))
} )

app.get('/login',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'src/views/login.html'))
    //res.sendFile(path.resolve('./views/index.html'))
} )