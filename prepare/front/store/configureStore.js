import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas'; //reducer 만들어 준거랑 비슷하게 rootSaga도 만들어줌.

const loggerMiddleware = (({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    retrun (next(action));
});

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production' // 이 조건문이 true면 ? 값으로 변수 지정, false면 : 값으로 지정.
        ? compose(applyMiddleware(...middlewares)) //배포용일 때는 devtool에 연결 x
        : compose(composeWithDevTools(...middlewares)) //개발모드에서는 devtool에 연결.
    const store = createStore(reducer, enhancer); // store는 state랑 reducer를 포함
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development'}); 

export default wrapper; // ==> 이제 _app.js 가서 Nodebirde를 wrapper로 감싸줌

