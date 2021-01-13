const Sequelize = require('sequelize');

//###### Variavel de conexão
const connection = new Sequelize("SchoolChallenge","root","",{
    host: "localhost",
    dialect: 'mysql',
    timezone: '-03:00'
});

// Impirtando a conexão
module.exports = connection;