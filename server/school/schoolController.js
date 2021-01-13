// PACKAGE
const express = require('express');
const router = express.Router();

// Models
var SchoolModel = require('./School')

// Controller

router.post('/school', (req,res) => {
    
    var {name, county, state, cep, telephone, type, email, fk_responsible, inep} = req.body
    console.log(name)
    console.log(county, state, cep )

    SchoolModel.findAll({where:{inep}}).then(response =>{
        if(response =='' || response ==null || response ==undefined){
            
            SchoolModel.create({
                name,
                county,
                state,
                email,
                cep,
                status:"A",
                telephone,
                type,
                fk_responsible,
                inep
        
                
            }).then((response) =>{
        
                res.statusCode = 201
                res.json({"message":"Criado com sucesso"})
            }).catch(error =>{
                res.statusCode = 400
                console.log(error)
            } )            
        }else{

            res.statusCode = 400
            res.json({success:false, message:"Inep já cadastrado"})

        }   
    })

  
})

router.get('/school', (req,res) =>{
    SchoolModel.findAll({raw:true}).then((data) =>{
        res.statusCode =200
        res.json({data: data})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.put('/school/:id', (req,res) =>{

    var {name, county, state, cep} = req.body
    var id = req.params.id

    SchoolModel.update({
        name,
        county,
        state,
        cep
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

router.get("/school/:id", (req,res) =>{
    
    let id = req.params.id
    
    SchoolModel.findByPk(id).then(data =>{
      
      if(data != null || data != undefined){
        res.statusCode = 200
        res.json({data:data})
      }else{
        res.statusCode = 400
        res.json({message:"Usuario não encontrado"})  
      }
      
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.delete('/school/:id', (req,res) =>{

    let id = req.params.id

    SchoolModel.destroy({where:{id}}).then((response) =>{
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