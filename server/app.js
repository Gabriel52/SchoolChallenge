
//  packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

// DATABASE
const connection = require('./database/database')

// CONTROLLER
const schoolController = require('./school/schoolController')
const responsibleController = require('./responsible/responsibleController')
const teamController = require('./team/teamController')
const challengeController = require('./challenge/challengeController')
const userController = require('./user/userController')
const companyController = require('./company/conpanyController')
const matterController = require('./matter/matterController')
const walletController = require('./wallet/walletController')

// Model
const UserModel = require('./user/User');
const User = require('./user/User');


// config packages
dotenv.config();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const jwtSecret = (process.env.JWT_SECRET)


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
app.use('/', userController )
app.use('/', companyController )
app.use('/', matterController )
app.use('/', walletController )

app.post('/auth', (req, res)=>{
    
    var {email, password} = req.body

    UserModel.findOne({where:{email}}).then(response =>{
        console.log(response)
        if(response){
            let correct = bcrypt.compareSync(password, response.password)
            if(correct){

                jwt.sign({id: response.id, email: response.email}, jwtSecret, {expiresIn: '24h'}, (error, token) =>{
                    if(error){
                        res.statusCode = 400
                        res.json({success: true, message:"Falha Interna"})
                    }else{
                                
                        res.statusCode = 200
                        res.json({success: true, token: token})
                        
                    }
                })

            }else{

                res.statusCode = 401
                res.json({success: false, message:"Credenciais de usuario invalido"})
            }
        }else{
            res.statusCode = 401
            res.json({success: false, message:"Email de usuario invalido"})
        }
    })

})

var port = 3000
app.listen(port, ()=>{
    console.log(`Aplicação rodando na porta 3000`)
})