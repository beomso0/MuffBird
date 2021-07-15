// sequelize에서는 table을 model이라고 부름p5.BandPass()

module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('User', { // mysql에 저장될 때는 자동으로 User -> users 이름의 table로 생성됨
    // id: {}, -> id는 mysql에 기본적으로 들어 있어서 작성하지 않음.
    email: {
      type: DataTypes.STRING(30), // 데이터 타입의 조건을 규정
      allowNull: false, // isRequired
      unique: true,
    }, // 이 각각 객체가 column임
    nickname: {
      type: DataTypes.STRING(30), // 데이터 타입의 조건을 규정
      allowNull: false, // isRequired
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100), // 데이터 타입의 조건을 규정
      allowNull: false, // isRequired
    },
   }, {
    charset: 'utf8',
    collate: 'utf8_general_ci' // for 한글 작성.
   });
   User.associate = (db) => { // 여기서 관계 정의. 
    // user와 post 간의 '일대다관계'
    db.User.hasMany(db.Post); //사람 하나가 여러 포스트를 가질 수 있다. -> post에 가서도 정의해주어야 함.
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 사용자와 좋아요(post 산하 정보)는 다대다 관계
    // through로 중간테이블의 이름을 지정할 수도 있음.
    // as로 관계별 대상의 별칭을 붙일 수 있음.
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    // 같은 테이블 내에서 관계 생성할 때는 foreignKey 넣어주어야 함.
    // foreignKey는 through table의 각 col name에 해당함.
   };
   return User;
}