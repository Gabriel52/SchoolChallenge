const Sequelize = require('sequelize');
const connection = require('../database/database');

const Responsible = connection.define('tbl_responsible',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rg:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
});

Responsible.sync({force:false}).then(()=>{
    console.log('created Responsible table')
}).catch(error=>{
    console.log(error)
})

module.exports = Responsible