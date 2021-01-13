
//  packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// DATABASE
const connection = require('./database/database')

// CONTROLLER
const schoolController = require('./school/schoolController')
const responsibleController = require('./responsible/responsibleController')
const teamController = require('./team/teamController')
const challengeController = require('./challenge/challengeController')

// config packages
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso');
    }).catch((error)=>{
        console.log('Erro: '+error);
    });


app.use('/', schoolController)
app.use('/', responsibleController )
app.use('/', teamController )
app.use('/', challengeController )


app.get('/autch', (req, res)=>{
    res.send('Hello word')
})
    

app.post('/autch', (req, res)=>{
    res.send('Hello word')
})

var port = 3000
app.listen(port, ()=>{
    console.log(`Aplicação rodando na porta 3000`)
})