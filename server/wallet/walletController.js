// PACKAGE
const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/middleware')
const dotenv = require('dotenv');
const axios = require('axios')

// Models
const WalletModel = require('./Wallet')
const UserModel = require('../user/User');

// config
dotenv.config();


router.post("/sendTransaction", adminAuth, (req, res) =>{

    let receive = "0x00a1bc6904410f856848d67681247e0a999de3a2"
    let send = "0xae8f6cb15008d030c5e070d97c30adcefb48950f"
    let amount = 20

    axios.post('http://192.168.0.8:3000/sendTransaction', {
        send,
        receive,
        amount
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.post("http://192.168.0.8:3000/sendTransaction", send, receive, amount).then(hash =>{
        res.json({success:true, data: hash})
    }).catch(error =>{
        console.log(error)
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