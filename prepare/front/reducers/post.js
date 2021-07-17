import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  addPostLoading: false, // 게시 완료되면 true
  addPostDone: false,
  addPostError: null,
  loadPostLoading: false, // 게시 완료되면 true
  loadPostDone: false,
  loadPostError: null,
  removePostLoading: false, // 게시 완료되면 true
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false, // 게시 완료되면 true
  addCommentDone: false,
  addCommentError: null,
};

// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//   id: shortId.generate(),
//   User: {
//     id: shortId.generate(),
//     nickname: faker.name.findName(),
//   },
//   content: faker.lorem.paragraphs(),
//   Images: [{
//     src: faker.image.image(),
//   }],
//   Comments: [{
//     User: {
//       id: shortId.generate(),
//       nickname: faker.name.findName(),
//     },
//     content: faker.lorem.paragraph(),
//   }],
// }));

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

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

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => { // 이게 immer의 기본꼴임. immer가 알아서 불변성을 지켜줌. state는 건드리면 안됨.
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePost = draft.mainPosts.length < 50;
        // unshift: 배열의 맨 앞에 요소 추가하고, 그 길이를 return하는 함수
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data); // 앞에다 추가를 해야 위에 올라감.
        // unshift: 배열의 맨 앞에 요소 추가하고, 그 길이를 return하는 함수
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = state.mainPosts.filter((v) => v.id !== action.data); // 앞에다 추가를 해야 위에 올라감.
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts]; // 불변성을 유지하느라 코드가 이렇게 길어짐 ㅠㅠ
        // mainPosts[postIndex] = post; // 이걸 편하게 할 수 있는 라이브러리가 '이머'
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
