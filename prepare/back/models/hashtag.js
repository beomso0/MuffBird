// sequelize에서는 table을 model이라고 부름p5.BandPass()

module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', { // mysql에 저장될 때는 자동으로 Hashtag -> users 이름의 table로 생성됨
   // id: {}, -> id는 mysql에 기본적으로 들어 있어서 작성하지 않음.
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
   charset: 'utf8mb4',
   collate: 'utf8mb4_general_ci' // for 한글 작성.
  });
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
}