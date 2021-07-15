const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport'); 
const passport = require('passport');
const app = express();

dotenv.config();
passportConfig();

db.sequelize.sync() //promise 여서 .then으로 적어주어야 함.
  .then(() => {
    console.log('db connected');
  })
  .catch(console.error);

app.use(cors({
  origin: true, // 실무에서는 이 도메인을 따로 지정해서 해킹 위협 낮춤.
  credentials: false,
}));
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

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter); // /post 경로를 postRouter 안의 router들에 prefix
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});