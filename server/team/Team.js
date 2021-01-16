const Sequelize = require('sequelize');
const connection = require('../database/database');

const Team = connection.define('tbl_team',{
    numberStudent:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    serie:{
        type:Sequelize.STRING,
        allowNull: false
    },
    coordinator:{
        type: Sequelize.STRING,
        allowNull: false
    },
    room:{
        type: Sequelize.STRING,
        allowNull: false
    },
    period:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    fk_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    fk_school:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Team.sync({force:false}).then(()=>{
    console.log('created Team table')
}).catch(error=>{
    console.log(error)
})

module.exports = Team