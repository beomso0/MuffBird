const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');

const db = require('./models');
const passportConfig = require('./passport'); 
const passport = require('passport');
const app = express();
const morgan = require('morgan');
const path = require('path');

dotenv.config();
passportConfig();

db.sequelize.sync() //promise 여서 .then으로 적어주어야 함.
  .then(() => {
    console.log('db connected');
  })
  .catch(console.error);

app.use(morgan('dev')); // 프론트에서 백엔드로 보내는 요청을 기록해줌
app.use(cors({ // CORS
  origin: 'http://localhost:3060', // 실무에서는 이 도메인을 따로 지정해서 해킹 위협 낮춤.
  credentials: true, // --> 이거 해줘야 프론트에서 백엔드로 쿠키 전달 가능 --> 그래야 백엔드에서 사용자 정보 받아서 권한 부여 가능. 
}));

app.use('/', express.static(path.join(__dirname, 'uploads'))); // uploads 폴더 사용 가능하게
app.use(express.json()); //use는 프론트에서 받은 데이터를 해석해서 라우터에 넣어주는 역할
app.use(express.urlencoded({ extended: true })); // 이 부분은 라우터보다 먼저 작성해주어야 함. Form 처리해주는 역할.
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET, // secret: 이게 해킹 당하면 비밀번호 등 정보가 복원될 수 있음.
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => { // url('/') + method(get)
  res.send('hello express');
});


app.use('/posts', postsRouter);
app.use('/post', postRouter); // /post 경로를 postRouter 안의 router들에 prefix
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

// 이 자리에 내부적으로 에러처리 미들웨어(next(err))가 있음
// 아래와 같이 따로 정의해줄 수도 있음.
// 에러 페이지를 따로 띄워주고 싶거나 할 때.
// app.use((err, req, res, next) => {

// });

app.listen(3065, () => {
  console.log('서버 실행 중');
});