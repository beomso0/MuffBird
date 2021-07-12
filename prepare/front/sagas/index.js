// *가 붙은 genrator 함수는 yield; 까지 실행하고, 그 다음에 .next() 해주면 그 다음 yield까지를 실행함.
// 중단점이 있는 함수! 원래 js 는 중단점이 없는데, gen 함수는 있음
// 이 성질을 활용한 것이 saga임.
// eventListener처럼 활용 가능

import { all, fork, call, take, put, takeEvery, takeLatest, throttle, delay } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try{
        // const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            // data: result.data,
        });
    } catch (err) {
        yield put({ // put은 dispatch와 거의 같음.
            type: 'LOG_IN_FAILURE',
            // data: err.response.data,
        });
    }    
}

function logOutAPI() {
    return axios.post('/api/logout');
}

function* logOut() {
    try{
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            // data: result.data,
        });
    } catch (err) {
        yield put({ // put은 dispatch와 거의 같음.
            type: 'LOG_OUT_FAILURE',
            // data: err.response.data,
        });
    }    
}

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try{
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
            // data: result.data,
        });
    } catch (err) {
        yield put({ // put은 dispatch와 거의 같음.
            type: 'ADD_POST_FAILURE',
            // data: err.response.data,
        });
    }    
}

//call은 동기 함수라서 결과 올떄까지 기다림 <-> fork는 비동기 함수 요청이라서, 결과 기다리지 않고 바로 다음줄 실행.
// yield는 await이랑 비슷한 역할이라고 생각해도 됨.

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn); //LOG_IN이 들어오면 logIn을 실행하는 일종의 이벤트리스너?
} //take의 치명적 단점은 한 번 밖에 listend을 안한다는 것. --> 그래서 while true로 감쌈. or takeEvery 사용

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut); //takeLeading은 첫번째꺼
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogIn), //fork는 함수를 실행하는 것. 
        fork(watchLogOut), //근데 call이랑은 다름. then, how different?
        fork(watchAddPost),
    ]);
}
