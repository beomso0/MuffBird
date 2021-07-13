export const initialState = {
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
export const LOG_IN_FAILURE = 'LOG_IN_FAIºLURE';

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
  switch (action.type) {
    case LOG_IN_REQUEST: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        logInlLoading: true, // 내가 바꾸고 싶은 부분만 수정
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        logInLoading: false,
        logInDone: true, // 내가 바꾸고 싶은 부분만 수정
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state, // 참조관계 유지
        logOutLoading: true, // 내가 바꾸고 싶은 부분만 수정
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        logOutLoading: false, // 내가 바꾸고 싶은 부분만 수정
        logOutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        logOutLoading: false, // 내가 바꾸고 싶은 부분만 수정
        logOutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state, // 참조관계 유지
        signUpLoading: true, // 내가 바꾸고 싶은 부분만 수정
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        signUpLoading: false, // 내가 바꾸고 싶은 부분만 수정
        signUpDone: true,
      };
    case SIGN_UP_FAILURE: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        signUpLoading: false, // 내가 바꾸고 싶은 부분만 수정
        signUpError: action.error,
      };
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state, // 참조관계 유지
        changeNicknameLoading: true, // 내가 바꾸고 싶은 부분만 수정
        changeNicknameDone: false,
        changeNicknameError: null,
      };
    case CHANGE_NICKNAME_SUCCESS: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        changeNicknameLoading: false, // 내가 바꾸고 싶은 부분만 수정
        changeNicknameDone: true,
      };
    case CHANGE_NICKNAME_FAILURE: // saga에서 action type name에 맞게 지정.
      return {
        ...state, // 참조관계 유지
        changeNicknameLoading: false, // 내가 바꾸고 싶은 부분만 수정
        changeNicknameError: action.error,
      };
    default:
      return state;
  }
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
