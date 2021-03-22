const Sequelize = require('sequelize');

const connection = new Sequelize('guiPerguntas', 'root', '99051943Mae',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;