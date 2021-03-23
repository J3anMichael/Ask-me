const Sequelize = require('sequelize');

const connection = new Sequelize('guiPerguntas', 'root', '********',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
