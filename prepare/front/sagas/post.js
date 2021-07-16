import { all, fork, takeLatest, delay, put, call } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, generateDummyPost,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostAPI(data) {
  // return axios.get('/api/post', data);
}

function* loadPost(action) { // saga는 여러개의 액션을 실행할 수 있음.
  try {
    // const result = yield call(loadPostAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: LOAD_POST_SUCCESS,
      data: generateDummyPost(10),
      // data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/post', { content: data });
}

function* addPost(action) { // saga는 여러개의 액션을 실행할 수 있음.
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: ADD_POST_FAILURE,
      // data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  // return axios.delete('/api/post', data, {
  //   withCredentials: true,
  // });
}

function* removePost(action) { // saga는 여러개의 액션을 실행할 수 있음.
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
      // data: result.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: REMOVE_POST_FAILURE,
      // data: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data); // Post / 1 / comment
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: ADD_COMMENT_FAILURE,
      // data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ]);
}
