// PACKAGE
const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/middleware')
const bcrypt = require("bcryptjs")

// Models
var CompanyModel = require('./Company')

// Controller
router.post('/company', (req,res) => {
    
    var {name, cnpj, county, state, cep, telephone, type, email, fk_responsible,setor, password} = req.body
    console.log(name)
    console.log(county, state, cep )

    let salt = bcrypt.genSaltSync(10);
    let encrypted = bcrypt.hashSync(password, salt)        

    CompanyModel.findAll({where:{cnpj}}).then(response =>{
        if(response =='' || response ==null || response ==undefined){
            
            CompanyModel.create({
                setor,
                password:encrypted,
                name,
                county,
                state,
                email,
                cep,
                status:"A",
                telephone,
                type,
                fk_responsible,
                cnpj
                
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

router.get('/company', adminAuth, (req,res) =>{
    CompanyModel.findAll({raw:true}).then((data) =>{
        res.statusCode = 200
        res.json({data: data})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.put('/company/:id', adminAuth, (req,res) =>{

    var {name, cnpj, county, state, cep, telephone, type, email, fk_responsible, status, password} = req.body
    var id = req.params.id
    
        CompanyModel.update({
            name,
            cnpj, 
            county, 
            state, 
            cep, 
            telephone, 
            type, 
            email, 
            fk_responsible,
            status
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
    


router.get("/company/:id", adminAuth, (req,res) =>{
    
    let id = req.params.id
    
    CompanyModel.findByPk(id).then(data =>{
      
      if(data != null || data != undefined){
        res.statusCode = 200
        res.json({data:data})
      }else{
        res.statusCode = 400
        res.json({message:"Empresa não encontrada não encontrado"})  
      }
      
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    })
})

router.delete('/company/:id', adminAuth, (req,res) =>{

    let id = req.params.id

    CompanyModel.destroy({where:{id}}).then((response) =>{
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