const express = require('express');
const app = express();

const mainRouter = require('./routers/mainRouters');
const path=require('path');

app.use(express.static(path.resolve(__dirname,'../public')));

app.use('/',mainRouter);


app.listen(3000, () => {
    console.log('Servidor funcionando');
});