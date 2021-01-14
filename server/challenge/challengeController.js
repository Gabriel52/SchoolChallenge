// PACKAGE
const express = require('express');
const router = express.Router();

// Models
var ChallengeModel = require('./Challenge')

// Controller

router.post('/challenge', (req,res) => {
    
    var {title, level, body, fk_team, matter} = req.body
            
    ChallengeModel.create({
        title,
        body,
        fk_team,
        level,
        matter,
        status:"A"
        
    }).then((response) =>{

        res.statusCode = 201
        res.json({"message":"Criado com sucesso"})

    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    } )            
  
})

router.get('/challenge', (req,res) =>{
    ChallengeModel.findAll({raw:true}).then((data) =>{
        console.log(data)
        res.statusCode =200
        res.json({success: true, data: data})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})


router.put('/challenge/:id', (req,res) =>{

    var {title, body, fk_team, level, status} = req.body
    var id = req.params.id

    ChallengeModel.update({
        title,
        body,
        fk_team,
        level,
        matter,
        status
    },{
        where:{
            id:id
        }
    }).then((response) =>{
        res.statusCode = 200
        res.json({success: true, message:"Atualizado com sucesso"})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.get("/challenge/:id", (req,res) =>{
    
    let id = req.params.id
    
    ChallengeModel.findByPk(id).then(data =>{
      
      if(data != null || data != undefined){
        res.statusCode = 200
        res.json({success: true, data:data})
      }else{
        res.statusCode = 400
        res.json({success: false,message:"Desafio não encontrado"})  
      }
    
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.delete('/challenge/:id', (req,res) =>{

    let id = req.params.id

    ChallengeModel.destroy({where:{id}}).then((response) =>{
        console.log(response)

        if( response!= 0 || response != 0){
            res.statusCode = 200
            res.json({success: true,message:"destruido com sucesso"})
          }else{
            res.statusCode = 400
            res.json({success: false,message:"Desafio não encontrado"})  
          }
        
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
        res.json({success: false}) 
    })
})

module.exports = router