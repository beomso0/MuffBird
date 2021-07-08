export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id:1,
            nickname: 'beomso0',
        },
        content: '첫번째 게시글 #해시태그 #하이하이',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },],
        Comments: [{
            User: {
                nickname: 'beomso0',
            },
            content: 'Great!'
        }, {
            User: {
                nickname: 'muffin',
            },
            content: 'hihi',
        }],
    }],
    imagePaths: [],
    postAdded: false, //게시 완료되면 true
};

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST, // 이렇게 빼주면 reducer에서 재활용 가능
}

const dummyPost = {
    id: 2,
    content: 'dummdumm',
    User: {
        id: 1,
        nickname: '뭉수'
    },
    Images: [],
    Comments: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts], //앞에다 추가를 해야 위에 올라감.
                postAdded: true,
            };
        default :
            return state;
    }
};

export default reducer;