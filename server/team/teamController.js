// PACKAGE
const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/middleware')

// Models
var TeamModel = require('./Team')
var SchoolModel = require('../school/School')

router.post('/team', adminAuth, (req,res) => {
    
    let {numberStudent, serie, coordinator, room, period, type, fk_school, fk_user } = req.body
    
    TeamModel.create({
        numberStudent,
        serie,
        coordinator,
        room,
        period,
        status: "A",
        type, 
        fk_school,
        fk_user
 
    }).then(response =>{
        res.statusCode = 201
        res.json({success: true, message: "Turma criado com sucesso"})
    }).catch(error =>{
        console.log(error)
        res.statusCode = 400
        res.json({success:false, message:"Erro ao cadastrar Turma"})
    })
})

router.put('/team/:id', adminAuth, (req,res) => {
    
    let id = req.params.id
    let {numberStudent, serie, coordinator, room, period, status,  type, fk_school } = req.body
    
    TeamModel.update({
        numberStudent,
        serie,
        coordinator,
        room,
        period,
        status,
        type, 
        fk_school
    },{
        where:{
            id:id
        }
    }).then(response =>{
        res.statusCode = 201
        res.json({success: true, message: "Turma atualizada com sucesso"})
    }).catch(error =>{
        console.log(error)
        res.statusCode = 400
        res.json({success:false, message:"Erro ao cadastrar Turma"})
    })
})

router.get('/team', adminAuth, (req,res) =>{
    TeamModel.findAll({raw:true}).then(data =>{

        res.statusCode = 200        
        res.json({success: true, data: data})
    }).catch(error =>{
        console.log(error)
        res.statusCode = 400
    })
})

router.get('/team/:id', adminAuth, (req,res) =>{

    let id = req.params.id    

    TeamModel.findByPk(id).then(data =>{
        
        console.log(data)
        if(data != null | data != undefined){
            res.statusCode = 200
            res.json({success: true, data: data})
        }else{
            res.statusCode = 400
            res.json({success: false, message: "Turma não encontrada"})
        }
        
    }).catch(error =>{
        console.log(error)
        res.statusCode = 400
    })
})

router.delete('/team/:id', adminAuth, (req,res) =>{

    let id = req.params.id

    TeamModel.destroy({where:{id}}).then((response) =>{
        console.log(response)

        if( response!= 0 || response != 0){
            res.statusCode = 200
            res.json({message:"destruido com sucesso"})
          }else{
            res.statusCode = 400
            res.json({message:"Time não encontrado"})  
          }
        
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

module.exports = router