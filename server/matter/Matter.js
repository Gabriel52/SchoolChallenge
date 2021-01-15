const Sequelize = require('sequelize');
const connection = require('../database/database');

const Matter = connection.define('tbl_matter',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    fk_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Matter.sync({force:false}).then(()=>{
    console.log('created matter table')
}).catch(error=>{
    console.log(error)
})

module.exports = Matter