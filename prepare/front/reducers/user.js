export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
};

const reducer = (state=initialState, action) => {
    switch(action.type) {        
        case 'LOG_IN':
            return {
                ...state, //참조관계 유지
                isLoggedIn: true, //내가 바꾸고 싶은 부분만 수정
                me: action.data,
            };
        case 'LOG_OUT':
            return {
                ...state, //참조관계 유지
                isLoggedIn: false, //내가 바꾸고 싶은 부분만 수정
                me: null,
            };
        default :
            return state;
    }
};

//login action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

//logout action
export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
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

