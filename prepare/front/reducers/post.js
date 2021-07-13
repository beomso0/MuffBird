import shortId from 'shortid';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'beomso0',
    },
    content: '첫번째 게시글 #해시태그 #하이하이',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'beomso0',
      },
      content: 'Great!',
    }, {
      User: {
        nickname: 'muffin',
      },
      content: 'hihi',
    }],
  }],
  imagePaths: [],
  addPostLoading: false, // 게시 완료되면 true
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false, // 게시 완료되면 true
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST, // 이렇게 빼주면 reducer에서 재활용 가능
  data, // 작성한 글에 해당
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST, // 이렇게 빼주면 reducer에서 재활용 가능
  data, // 작성한 글에 해당
});

const dummyPost = (text) => ({
  id: shortId.generate(),
  content: text,
  User: {
    id: 1,
    nickname: '뭉수',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '뭉수',
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts], // 앞에다 추가를 해야 위에 올라감.
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts]; // 불변성을 유지하느라 코드가 이렇게 길어짐 ㅠㅠ
      mainPosts[postIndex] = post; // 이걸 편하게 할 수 있는 라이브러리가 '이머'
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
