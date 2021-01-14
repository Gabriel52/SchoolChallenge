const Sequelize = require('sequelize');
const connection = require('../database/database');

const Company = connection.define('tbl_company',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    county:{
        type: Sequelize.STRING,
        allowNull: false
    },
    state:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cep:{
        type: Sequelize.STRING,
        allowNull: false,
     
    },
    fk_responsible:{
        type: Sequelize.STRING,
        allowNull: false
    },

});

Company.sync({force:false}).then(()=>{
    console.log('created company table')
}).catch(error=>{
    console.log(error)
})

module.exports = Company