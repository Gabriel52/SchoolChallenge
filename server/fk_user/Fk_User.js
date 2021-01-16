const Sequelize = require('sequelize');
const connection = require('../database/database');

const FK_user = connection.define('tbl_fk_user',{
    fk_user:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    fk_team:{
        type: Sequelize.STRING,
    allowNull: false 
    },    
    
});

FK_user.sync({force:false}).then(()=>{
    console.log('created fk_user table')
}).catch(error=>{
    console.log(error)
})

module.exports = FK_user