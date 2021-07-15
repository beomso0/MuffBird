// sequelize에서는 table을 model이라고 부름p5.BandPass()

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { // mysql에 저장될 때는 자동으로 Comment -> users 이름의 table로 생성됨
   // id: {}, -> id는 mysql에 기본적으로 들어 있어서 작성하지 않음.
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // UserId: 1
    // PostId: 3
  }, {
   charset: 'utf8mb4',
   collate: 'utf8mb4_general_ci' // for 한글 작성.
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User); //belongsTo 를 쓰면, 자동으로 소속 정보 column이 생김.
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
}