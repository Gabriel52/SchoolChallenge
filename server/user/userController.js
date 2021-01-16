// PACKAGE
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const adminAuth = require('../middleware/middleware');

// Models
var UserModel = require('./User')
var ChallengeModel = require('../challenge/Challenge')
var WalletModel = require('../wallet/Wallet')
var CompanyModel = require('../company/Company')
var Fk_user = require('../fk_user/Fk_User')

// Controller

router.post('/user', (req,res) => {

    var {email, password, name, cpf, rg, role, cep, uf, city, fk_turma, fk_wallet,  age, attendance, note, behavior, img} = req.body
    console.log(fk_turma+ "email: "+email)

    let salt = bcrypt.genSaltSync(10);
    let encrypted = bcrypt.hashSync(password, salt)        

    UserModel.findOne({where:{email}}).then(response =>{
        console.log(response )
        if(response){
            res.statusCode =401
            res.json({success:false, message:"Email já cadastrado, tente outro"})
        }else{   
            UserModel.create({
                email:email,
                password:encrypted, 
                name, 
                cpf, 
                rg, 
                role,
                fk_wallet,
                fk_turma,
                cep,
                uf,
                city,
                status:"A",
                age, 
                attendance, 
                note, 
                behavior,
                img
                
            }).then((response) =>{
        
               
                res.json({"message":"Criado com sucesso"})
        
            }).catch(error =>{
               
                console.log(error)
            } )            
        }
    }).catch(error =>{
        console.log(error)
    })
    
})

router.get('/user', adminAuth, (req,res) =>{
    UserModel.findAll({raw:true}).then((data) =>{
        console.log(data)
        res.statusCode =200
        res.json({success: true, data: data, user:req.loggedUser })
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})


router.put('/user/:id', adminAuth, (req,res) =>{

    var {email, password, name, cpf, rg, role, fk_turma, fk_wallet, status, age, attendance, state, city,cep, note, behavior, img} = req.body
       
    let salt = bcrypt.genSaltSync(10);
    let encrypted = bcrypt.hashSync(password, salt)  

    let noteTratment = note *10
    let score = parseInt(noteTratment) + parseInt(attendance) + parseInt(behavior)

    var id = req.params.id
    UserModel.findByPk(id).then(response => {
        console.log(response)
        if(response){
            UserModel.update({
                email:email,
                password:encrypted, 
                name, 
                status,
                cpf, 
                rg, 
                role,
                fk_wallet,
                fk_turma,
                age, 
                state,
                city,
                cep,
                attendance, 
                note: noteTratment, 
                behavior,
                img,
                score
            },{
                where:{
                    id:id
                }
            }).then(() =>{
                
                res.statusCode = 200
                res.json({success: true, message:"Atualizado com sucesso"})
            }).catch(error =>{
                res.statusCode = 400
                console.log(error)
            })
        }else{
            res.statusCode = 400
            res.json({success: false, message:"Uusuario não encontrado"})

        }
    })
  
})

router.get("/user/:id", adminAuth, (req,res) =>{
    
    let id = req.params.id
    
    UserModel.findByPk(id).then(data =>{
      
      if(data != null || data != undefined){
        res.statusCode = 200
        res.json({success: true, data:data})
      }else{
        res.statusCode = 400
        res.json({success: false,message:"Usuario não encontrado"})  
      }
    
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.delete('/user/:id', adminAuth, (req,res) =>{

    let id = req.params.id

    UserModel.destroy({where:{id}}).then((response) =>{
        console.log(response)

        if( response!= 0 || response != 0){
            res.statusCode = 200
            res.json({success: true,message:"destruido com sucesso"})
          }else{
            res.statusCode = 400
            res.json({success: false,message:"Usuario não encontrado"})  
          }
        
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
        res.json({success: false}) 
    })
})

router.get('/student', (req, res) =>{
    let role = "aluno"

    UserModel.findAll({where:{role}}).then(data =>{
        res.json({success:true , student: data})
        res.statusCode = 200
    }).catch(error =>{
        res.json({success: false})
        res.statusCode = 400
    })
})

router.get("/student/challenge", adminAuth, (req, res) =>{

    let id = req.loggedUser.id     
    
    UserModel.findOne({where:id}).then(user =>{
        ChallengeModel.findAll({where:{fk_team: user.fk_turma}}).then(challenge =>{
            if(challenge ==null || challenge ==undefined){
                res.json({success: false})
                res.statusCode = 400
            }else{
                res.json({data: challenge, success: true})
                res.statusCode = 200
            }
        })
    })
})




router.get("/myaccount", adminAuth, (req,res) =>{
    
    let id = req.loggedUser.id     
    let type = req.type


    console.log(type)

    if(type == "company"){
        CompanyModel.findOne({where:id}).then(company =>{

            res.json({success:true, user: company})

        })
    }else{
        UserModel.findOne({where:{id}}).then(user =>{
      
            if(user != null || data != user){
              
              WalletModel.findOne({where:{address: user.fk_wallet}}).then(wallet =>{
                  res.json({wallet:wallet , user: user})
                  res.statusCode =200
              }).catch(error =>{
                  console.log(error)
              })
      
            }else{
              res.statusCode = 400
              res.json({success: false,message:"Usuario não encontrado"})  
            }
          
          }).catch(error =>{
              res.statusCode = 400
              console.log(error)
          })
    }
})


module.exports = router