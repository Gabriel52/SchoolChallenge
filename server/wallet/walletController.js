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
    
    let send = "0x00a1bc6904410f856848d67681247e0a999de3a2"
    let receive = "0xd1228725fde3e4d3cd9df30964a9874a1de64f4c"
    let amount = 1
    var id = req.loggedUser.id

    axios.post('http://192.168.0.8:3000/sendTransaction', {
        send,
        receive,
        amount  

      }).then(function (response) {
        
        UserModel.findOne({where:{id}}).then(user => {
            res.statusCode =200
            let hash = response.data.resultado
            console.log(user.score+"----------------")
            let scoreTratment = user.score - (amount *100) 
            console.log(scoreTratment + "!!!!!!!!!!!!!!!!!!!!!!!!")
            console.log(amount *100)

            UserModel.update({
                email:user.email,
                password:user.password, 
                name:user.name, 
                status:user.status,
                cpf:user.cpf, 
                rg:user.rg, 
                role:user.role,
                fk_wallet:user.fk_wallet,
                fk_turma:user.fk_turma,
                age:user.age, 
                state:user.state,
                city:user.city,
                cep:user.cep,
                attendance:user.attendance, 
                note: user.note, 
                behavior:user.behavior,
                img:user.img,
                score:scoreTratment
            },{
                where:{
                    id
                }
            }).then(() =>{
                
                axios.post('http://192.168.0.8:3000/getTransaction', {
                   hash
                }).then(dataTransaction => {
                    res.statusCode = 200
                    res.json({success: true, dataTransaction:dataTransaction.data, user:user})
                
                }).catch(error =>{
                    console.log(error)
                })

            }).catch(error =>{
                res.statusCode = 400
                console.log(error)
            })

        })

      }).catch(function (error) {
        console.log(error);
      });
    
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