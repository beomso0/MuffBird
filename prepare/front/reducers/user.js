export const initialState = {
    isLoggedIn: false,
    isLoggingIn: false, //로그인 시도 중.
    isLoggingOut: false, //로그아웃 시도 중.
    me: null,
    signUpData: {},
    loginData: {},
};

const reducer = (state=initialState, action) => {
    switch(action.type) {        
        case 'LOG_IN_REQUEST': //saga에서 action type name에 맞게 지정.
            return {
                ...state, //참조관계 유지
                isLoggingIn: true, //내가 바꾸고 싶은 부분만 수정
            };
        case 'LOG_IN_SUCCESS': //saga에서 action type name에 맞게 지정.
            return {
                ...state, //참조관계 유지
                isLoggingIn: false,
                isLoggedIn: true, //내가 바꾸고 싶은 부분만 수정
                me: { ...action.data, nickname: 'beomso0' },
            };
        case 'LOG_IN_FAILURE': //saga에서 action type name에 맞게 지정.
            return {
                ...state, //참조관계 유지
                isLoggingIn: false,
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state, //참조관계 유지
                isLoggingOut: true, //내가 바꾸고 싶은 부분만 수정
            };
        case 'LOG_OUT_SUCCESS': //saga에서 action type name에 맞게 지정.
            return {
                ...state, //참조관계 유지
                isLoggingOut: false, //내가 바꾸고 싶은 부분만 수정
                isLoggedIn: false,
                me: null,
            };
        case 'LOG_OUT_FAILURE': //saga에서 action type name에 맞게 지정.
            return {
                ...state, //참조관계 유지
                isLoggingOut: false, //내가 바꾸고 싶은 부분만 수정
            };
        default :
            return state;
    }
};

//login action creator
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

//action creator //action은 객체임!!
const changeNickname = (data) => {
    return {
        type: 'CHANE_NICKNAME',
        data
    }
}; // --> store.dispatch(changeNickname('mama muffin'))

export default reducer;

