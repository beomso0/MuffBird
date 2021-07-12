// *가 붙은 genrator 함수는 yield; 까지 실행하고, 그 다음에 .next() 해주면 그 다음 yield까지를 실행함.
// 중단점이 있는 함수! 원래 js 는 중단점이 없는데, gen 함수는 있음
// 이 성질을 활용한 것이 saga임.
// eventListener처럼 활용 가능

import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

//call은 동기 함수라서 결과 올떄까지 기다림 <-> fork는 비동기 함수 요청이라서, 결과 기다리지 않고 바로 다음줄 실행.
// yield는 await이랑 비슷한 역할이라고 생각해도 됨.

export default function* rootSaga() {
    yield all([
        fork(postSaga), //fork는 함수를 실행하는 것. 
        fork(userSaga), //근데 call이랑은 다름. then, how different?
    ]);
}
