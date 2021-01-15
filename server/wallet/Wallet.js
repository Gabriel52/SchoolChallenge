const Sequelize = require('sequelize');
const connection = require('../database/database');

const Wallet = connection.define('tbl_wallet',{
    address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    saldo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    

});

Wallet.sync({force:false}).then(()=>{
    console.log('created Wallet table')
}).catch(error=>{
    console.log(error)
})

module.exports = Wallet