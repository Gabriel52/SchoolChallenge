var express = require('express');
var app = express();


app.post('/autch', (req, res)=>{
    res.send('Hello word')
})

var port = 3000
app.listen(port, ()=>{
    console.log(`Aplicação rodando na porta 3000`)
})