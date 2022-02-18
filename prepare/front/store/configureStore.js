import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers'

const configureStore = () => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))                      // 배포용일때 Devtool연결 안해놓고 
    : composeWithDevTools(applyMiddleware(...middlewares))              // 개발용일때 Devtools 연결, (history가 다 보이면 보안에 취약, 메모리부하)
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;