// sequelize에서는 table을 model이라고 부름p5.BandPass()

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { // mysql에 저장될 때는 자동으로 Image -> users 이름의 table로 생성됨
   // id: {}, -> id는 mysql에 기본적으로 들어 있어서 작성하지 않음.
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' // for 한글 작성.
  });
    Image.associate = (db) => {
      db.Image.belongsTo(db.Post);
    };
    return Image;
}