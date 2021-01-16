// PACKAGE
const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/middleware')

// Models
const Fk_userModel = require('./Fk_User')


router.post('/fk_user', adminAuth, (req, res) => {
    var {fk_user,fk_team} = req.body


    Fk_userModel.create({
        fk_user,
        fk_team
    }).then(() =>{
        res.statusCode = 201
        res.json({message:"Criado com sucesso"})
    }).catch(error =>{
        res.statusCode = 400
        console.log(error)
    } )

})


router.get('/fk_user', (req, res) =>{
    Fk_userModel.findAll({raw:true}).then(data =>{
        res.json({succes:true, data:data})
    })
})

module.exports = router