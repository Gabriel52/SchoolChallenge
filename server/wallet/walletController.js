// PACKAGE
const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/middleware')
const axios = require("axios")

// Models
const WalletModel = require('./Wallet')
const UserModel = require('../user/User');


router.get('/wallet', adminAuth, (req,res) => {
    let id = req.loggedUser.id
    
    UserModel.findOne({where:{id}}).then(user => {
        
        WalletModel.findOne({where:{address: user.fk_wallet}}).then(wallet =>{
            res.json({wallet:wallet , user: user})
            res.statusCode =200
        }).catch(error =>{
            console.log(error)
        })
    })

})


router.post("/wallet", adminAuth, (req, res) =>{
    
    var {address, saldo} = req.body

    WalletModel.create({
        address,
        saldo
    }).then(response =>{
        res.json({success:true, message:"Carteira criada com sucesso" })
    })
})





module.exports = router