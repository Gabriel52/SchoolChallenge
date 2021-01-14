// PACKAGE
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")

// Models
var UserModel = require('./User')

// Controller

router.post('/user', (req,res) => {
    
    var {email, password, name, cpf, rg, role, fk_turma, fk_wallet,  age, attendance, note, behavior} = req.body
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
                status:"A",
                age, 
                attendance, 
                note, 
                behavior
                
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

router.get('/user', (req,res) =>{
    UserModel.findAll({raw:true}).then((data) =>{
        console.log(data)
        res.statusCode =200
        res.json({success: true, data: data})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})


router.put('/user/:id', (req,res) =>{

    var {email, password, name, cpf, rg, role, fk_turma, fk_wallet, status, age, attendance, note, behavior} = req.body
       
    let salt = bcrypt.genSaltSync(10);
    let encrypted = bcrypt.hashSync(password, salt)  

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
                attendance, 
                note, 
                behavior
        
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

router.get("/user/:id", (req,res) =>{
    
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

router.delete('/user/:id', (req,res) =>{

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

module.exports = router