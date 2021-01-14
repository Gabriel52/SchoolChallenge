const Sequelize = require('sequelize');
const connection = require('../database/database');

const User = connection.define('tbl_user',{
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
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
    age:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    score:{
        type: Sequelize.STRING,
        
    }, 
    attendance:{
        type: Sequelize.INTEGER,
        
    },
    note:{
        type: Sequelize.INTEGER,
        
    },
    behavior:{
        type: Sequelize.INTEGER,
        
    },
    role:{
        type: Sequelize.STRING,
        allowNull: false
    },
    personality:{
        type: Sequelize.STRING,
        
    },
    fk_wallet:{
        type: Sequelize.STRING,
        
    },
    fk_turma:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

User.sync({force:false}).then(()=>{
    console.log('created User table')
}).catch(error=>{
    console.log(error)
})

module.exports = User