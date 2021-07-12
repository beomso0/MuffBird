import { all, fork, takeLatest, delay, put,  } from "redux-saga/effects";
import axios from 'axios';

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}

//logout action
export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn); //LOG_IN이 들어오면 logIn을 실행하는 일종의 이벤트리스너?
} //take의 치명적 단점은 한 번 밖에 listend을 안한다는 것. --> 그래서 while true로 감쌈. or takeEvery 사용

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut); //takeLeading은 첫번째꺼
}

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try{
        // const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,
        });
    } catch (err) {
        yield put({ // put은 dispatch와 거의 같음.
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
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
            data: err.response.data,
        });
    }    
}