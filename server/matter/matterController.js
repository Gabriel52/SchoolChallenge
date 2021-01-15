// PACKAGE
const express = require('express');
const Match = require('./Matter');
const router = express.Router();

// Models
var MatterModel = require('./Matter')
var UserModel = require('../user/User')
var TeamModel = require('../team/Team')
const adminAuth = require('../middleware/middleware')


// Controller



router.post('/matter', adminAuth, (req,res) => {
    
    var {name, fk_user} = req.body
    console.log(name)

    MatterModel.findAll({where:{name}}).then(response =>{
        if(response =='' || response ==null || response ==undefined){
            
            MatterModel.create({
                name,
                fk_user
                
            }).then((response) =>{
        
                res.statusCode = 201
                res.json({"message":"Criado com sucesso"})
            }).catch(error =>{
                res.statusCode = 400
                console.log(error)
            } )            
        }else{

            res.statusCode = 400
            res.json({success:false, message:"CNPJ já cadastrado"})

        }   
    }).catch(error =>{
        console.log(error)
    })

  
})

router.get('/matter', adminAuth, (req,res) =>{
    MatterModel.findAll({raw:true}).then((data) =>{
        res.statusCode = 200
        res.json({data: data})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.put('/matter/:id', adminAuth, (req,res) =>{

    var {name, fk_user} = req.body
    var id = req.params.id
    
        MatterModel.update({
            name,
            fk_user
        },{
            where:{
                id:id
            }
        }).then((response) =>{
            res.statusCode = 200
            res.json({message:"Atualizado com sucesso"})
        }).catch(error =>{
            res.statusCode = 400
            console.log(error)
        })
    
    
})

router.get("/matter/:id", adminAuth, (req,res) =>{
    
    let id = req.params.id
    
    MatterModel.findByPk(id).then(data =>{
      
      if(data != null || data != undefined){
        res.statusCode = 200
        res.json({data:data})
      }else{
        res.statusCode = 400
        res.json({message:"Materia não encontrada não encontrado"})  
      }
      
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.delete('/matter/:id', adminAuth, (req,res) =>{

    let id = req.params.id

    MatterModel.destroy({where:{id}}).then((response) =>{
        console.log(response)

        if( response!= 0 || response != 0){
            res.statusCode = 200
            res.json({message:"destruido com sucesso"})
          }else{
            res.statusCode = 400
            res.json({message:"Usuario não encontrado"})  
          }
        
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.get('/teacher/:id', adminAuth, (req, res) =>{
    let id = req.params.id
    UserModel.findByPk(id).then(teacher =>{
        if(teacher == null){
        res.statusCode = 400
        res.json({success:false, message: "Professor não encontrado"})    
        }
  
        MatterModel.findAll({where:{fk_user:id}}).then( matter =>{
            res.statusCode = 200
            res.json({success: true,teacher: teacher, matter: matter})
            if(matter ==nul){
                es.statusCode = 400
                res.json({success:false, message: "Professor não possui materia"})
            }else{

            }
        
        })

    })
})

module.exports = router