const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();
db.sequelize.sync() //promise 여서 .then으로 적어주어야 함.
  .then(() => {
    console.log('db connected');
  })
  .catch(console.error);

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