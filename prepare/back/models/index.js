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

//db 객체에 modules 안의 모듈들 불러오기
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);



Object.keys(db).forEach(modelName => { // 반복문 돌면서 관계 연결 해주는 부분.
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// --> 이제 express에서 sequelize로 만든 db를 등록해주어야 함.