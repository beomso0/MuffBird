import produce from 'immer';

export const initialState = {
  followLoading: false,
  followDone: false, // 로그인 시도 중.
  followError: null,
  unfollowLoading: false,
  unfollowDone: false, // 로그인 시도 중.
  unfollowError: null,
  logInLoading: false,
  logInDone: false, // 로그인 시도 중.
  logInError: null,
  logOutLoading: false,
  logOutDone: false, // 로그아웃 시도 중.
  logOutError: null,
  signUpLoading: false,
  signUpDone: false, // 로그인 시도 중.
  signUpFailure: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
  ...data,
  nickname: '범수',
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: '밤수' }, { nickname: '범수' }, { nickname: '모피니' }],
  Followers: [{ nickname: '밤수' }, { nickname: '범수' }, { nickname: '모피니' }],
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FOLLOW_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.followlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.followError = null;
        draft.followDone = false;
        break;
      case FOLLOW_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.followLoading = false;
        draft.followDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me.Followings.push({ id: action.data });
        break;
      case FOLLOW_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.unfollowlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;
      case UNFOLLOW_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.unfollowLoading = false;
        draft.unfollowDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
        // 언팔할 사람만 빠짐
        break;
      case UNFOLLOW_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOG_IN_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.logInlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.logInLoading = false;
        draft.logInDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.logOutLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE: // saga에서 action type name에 맞게 지정.
        return {
          ...state, // 참조관계 유지
          logOutLoading: false, // 내가 바꾸고 싶은 부분만 수정
          logOutError: action.error,
        };
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.signUpLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.signUpLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.changeNicknameLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.changeNicknameLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: [{ id: action.data }, ...state.me.Posts],
        //   },
        // };
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
        // 나중에 성능 문제 생기면 filter 대신 unshift 사용할 것.
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
        //   },
        // };
      default:
        break;
    }
  });
};

// login action creator
export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

// logout action
export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

// action creator //action은 객체임!!
const changeNickname = (data) => ({
  type: CHANE_NICKNAME,
  data,
}); // --> store.dispatch(changeNickname('mama muffin'))

export default reducer;
