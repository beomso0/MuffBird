import { all, fork, takeLatest, delay, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
  RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE,
  LOAD_ONE_POST_REQUEST, LOAD_ONE_POST_SUCCESS, LOAD_ONE_POST_FAILURE,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadOnePostAPI(data) {
  return axios.get(`/post/${data}`); // lastId가 undefined인 경우에는 0으로
  // get 에서 데이터 선택해서 불러올 때는 ? 이후에 / key = value / 형태로 query string을 만들어 보냄.
  // --> 주소를 캐싱하면 데이터까지 캐싱할 수 있어서 좋음. --> get만의 이점.
}

function* loadOnePost(action) { // saga는 여러개의 액션을 실행할 수 있음.
  try {
    const result = yield call(loadOnePostAPI, action.data);
    yield put({
      type: LOAD_ONE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_ONE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function loadPostAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`); // lastId가 undefined인 경우에는 0으로
  // get 에서 데이터 선택해서 불러올 때는 ? 이후에 / key = value / 형태로 query string을 만들어 보냄.
  // --> 주소를 캐싱하면 데이터까지 캐싱할 수 있어서 좋음. --> get만의 이점.
}

function* loadPost(action) { // saga는 여러개의 액션을 실행할 수 있음.
  try {
    const result = yield call(loadPostAPI, action.lastId);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_POST_FAILURE,
      // data: err.response,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/post', data); // POST/post
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
  return axios.delete(`/post/${data}`); // DELETE에는 데이터 넣을 수 없음.
}

function* removePost(action) { // saga는 여러개의 액션을 실행할 수 있음.
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
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
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: ADD_COMMENT_FAILURE,
      // data: err.response.data,
    });
  }
}

function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`); // 여기서 data는 post.id
  // patch는 table(여기서는 post)의 일부분 수정할 때 사용함.
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: LIKE_POST_FAILURE,
      // data: err.response.data,
    });
  }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: UNLIKE_POST_FAILURE,
      // data: err.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data); // action.data: imageFormData
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: UPLOAD_IMAGES_FAILURE,
      // data: err.response.data,
    });
  }
}

function retweetAPI(data) {
  return axios.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield call(retweetAPI, action.data); // action.data: imageFormData
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: RETWEET_FAILURE,
      error: err.response.data,
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

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
}

function* watchLoadOnePost() {
  yield takeLatest(LOAD_ONE_POST_REQUEST, loadOnePost);
}

export default function* postSaga() {
  yield all([
    fork(watchRetweet),
    fork(watchUploadImages),
    fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchLoadOnePost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchLikePost),
    fork(watchUnlikePost),
  ]);
}
