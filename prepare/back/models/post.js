// sequelize에서는 table을 model이라고 부름.

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // mysql에 저장될 때는 자동으로 Post -> users 이름의 table로 생성됨
   // id: {}, -> id는 mysql에 기본적으로 들어 있어서 작성하지 않음.
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
   charset: 'utf8mb4', // mb4는 이모티콘 저장에 필요함.
   collate: 'utf8mb4_general_ci' // for 한글 작성.
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.removeUser, post.setUser 등의 method를 기본으로 제공
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); 
    // 사용자와 좋아요(post 산하 정보)는 다대다 관계
    // 이렇게 만들어주면, post.addLikers & post.removeLikers의 method가 자동으로 생성됨.
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // retweet
  };
  return Post;
}