const Sequelize = require('sequelize');
const connection = require('../database/database');

const Challenge = connection.define('tbl_challenge',{
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    body:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    level:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fk_team:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    matter:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
    success:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

Challenge.sync({force:false}).then(()=>{
    console.log('created challenge table')
}).catch(error=>{
    console.log(error)
})

module.exports = Challenge