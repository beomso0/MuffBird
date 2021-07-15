const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
/* config 모양 from config/config.json
"username": "root",
"password": "lnofbeing1!",
"database": "muffbird",
"host": "127.0.0.1",
"port": "3306",
"dialect": "mysql"
*/
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
// 이렇게 하면 sequelize가 노드랑 mysql을 연결해 줌.



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
