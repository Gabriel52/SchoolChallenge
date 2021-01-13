const Sequelize = require('sequelize');
const connection = require('../database/database');

const School = connection.define('tbl_school',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
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
    cep:{
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
    inep:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    fk_responsible:{
        type: Sequelize.STRING,
        allowNull: false
    },

});

School.sync({force:false}).then(()=>{
    console.log('created school table')
}).catch(error=>{
    console.log(error)
})

module.exports = School