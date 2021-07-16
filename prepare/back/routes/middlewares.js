// 미들웨어 직접 만들기
// 중복 피하기 위해 따로 뺴준 것.

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    // 넥스트 사용 방법은 2개
    // 안에다 뭘 넣으면 에러 처리
    // 그냥 next()는 다음 미들웨어로 이행.
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근이 가능합니다.');
  }
}