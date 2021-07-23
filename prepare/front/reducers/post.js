import produce from 'immer';

export const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePost: true,
  addPostLoading: false, // 게시 완료되면 true
  addPostDone: false,
  addPostError: null,
  loadPostLoading: false, // 게시 완료되면 true
  loadPostDone: false,
  loadPostError: null,
  loadOnePostLoading: false, // 게시 완료되면 true
  loadOnePostDone: false,
  loadOnePostError: null,
  removePostLoading: false, // 게시 완료되면 true
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false, // 게시 완료되면 true
  addCommentDone: false,
  addCommentError: null,
  likePostLoading: false, // 게시 완료되면 true
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false, // 게시 완료되면 true
  unlikePostDone: false,
  unlikePostError: null,
  uploadImagesLoading: false, // 게시 완료되면 true
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false, // 게시 완료되면 true
  retweetDone: false,
  retweetError: null,
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
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_ONE_POST_REQUEST = 'LOAD_ONE_POST_REQUEST';
export const LOAD_ONE_POST_SUCCESS = 'LOAD_ONE_POST_SUCCESS';
export const LOAD_ONE_POST_FAILURE = 'LOAD_ONE_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

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
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      case RETWEET_SUCCESS: {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: {
        // action data PostId, UserId 들어있음.
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers.push({ id: action.data.UserId });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case UNLIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        // unshift: 배열의 맨 앞에 요소 추가하고, 그 길이를 return하는 함수
        break;
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        // unshift: 배열의 맨 앞에 요소 추가하고, 그 길이를 return하는 함수
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_ONE_POST_REQUEST:
        draft.loadOnePostLoading = true;
        draft.loadOnePostDone = false;
        draft.loadOnePostError = null;
        break;
      case LOAD_ONE_POST_SUCCESS:
        draft.loadOnePostLoading = false;
        draft.loadOnePostDone = true;
        draft.singlePost = action.data;
        // unshift: 배열의 맨 앞에 요소 추가하고, 그 길이를 return하는 함수
        break;
      case LOAD_ONE_POST_FAILURE:
        draft.loadOnePostLoading = false;
        draft.loadOnePostError = action.error;
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
        draft.imagePaths = [];
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
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId); // 앞에다 추가를 해야 위에 올라감.
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
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
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
