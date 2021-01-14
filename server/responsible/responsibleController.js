// PACKAGE
const express = require('express');
const router = express.Router();

// Models
const ResponsibleModel = require('./Responsible')


router.post('/responsible', (req, res) => {
    var {name,email, cpf, rg, status} = req.body

    console.log(name, email, cpf, rg)
    
    ResponsibleModel.create({
        name,
        email,
        rg,
        cpf,
        status:"A"
    }).then((response) =>{
        res.statusCode = 201
        res.json({"message":"Criado com sucesso"})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    } )

})


router.get('/responsible', (req, res) =>{
    ResponsibleModel.findAll({raw:true}).then(data =>{
        res.statusCode = 200;
        res.json({data: data})
    })
})

router.get('/responsible/:id', (req, res) =>{

    let id = req.params.id

    ResponsibleModel.findByPk(id).then(data =>{
        
        console.log(data)
        if(data != null){    
            res.statusCode = 200;
            res.json({data: data})
        }else{
            res.statusCode = 400
            res.json({message:"Usuario Não encontrado"})            
        }
    })
})

router.put('/responsible/:id', (req,res) =>{

    var {name,email, cpf, rg, status} = req.body
    var id = req.params.id

    ResponsibleModel.update({
        name,
        email,
        cpf,
        rg,
        status
    },{
        where:{
            id:id
        }
    }).then((response) =>{
        res.statusCode = 200
        res.json({"message":"Atualizado com sucesso"})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.delete('/responsible/:id', (req,res) =>{

    let id = req.params.id

    ResponsibleModel.destroy({where:{id}}).then((response) =>{
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

module.exports = router