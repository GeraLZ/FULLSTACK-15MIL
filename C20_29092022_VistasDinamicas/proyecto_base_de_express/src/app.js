
const express = require('express');
const app = express();

const mainRouter = require('./routers/mainRouters');
const path=require('path');


app.use(express.static (path.join(__dirname,'../public')) );

app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});


app.listen(3000, () => { 
    console.log('Servidor arriba en el puerto 3000 🤓👌');
});