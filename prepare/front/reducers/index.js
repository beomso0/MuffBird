import { HYDRATE } from 'next-redux-wrapper'; // hydrate는 액션 중 하나
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => { // 이건 hydrate(서버사이드렌더링)을 위해 index 리듀서를 추가한 것.
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state; // reducer 초기화 때도 rootReducer가 실행되기 때문에 default 동작도 지정해주어야 함.
    }
  },
  user,
  post,
});

export default rootReducer;
