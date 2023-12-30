require ('dotenv').config();
const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases: 0,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }   
)

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.authenticate = require('./authHendelModel') (sequelize, DataTypes)
db.employee = require('./employeeModel.js') (sequelize, DataTypes)
db.primaryUsers = require('./PrimaryUserModel.js') (sequelize, DataTypes)

db.sequelize.sync({force:false})
.then( ()=> {
    
})


module.exports = db