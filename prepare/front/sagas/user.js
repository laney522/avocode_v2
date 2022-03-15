import { all, fork, delay, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST,
         LOG_IN_SUCCESS, 
         LOG_IN_FAILURE, 
         LOG_OUT_REQUEST, 
         LOG_OUT_SUCCESS, 
         LOG_OUT_FAILURE, 
         SIGN_UP_REQUEST, 
         SIGN_UP_SUCCESS, 
         SIGN_UP_FAILURE, 
         FOLLOW_REQUEST, 
         UNFOLLOW_REQUEST, 
         FOLLOW_SUCCESS, 
         FOLLOW_FAILURE, 
         UNFOLLOW_SUCCESS, 
         UNFOLLOW_FAILURE,
         LOAD_MY_INFO_SUCCESS,
         LOAD_MY_INFO_FAILURE,
} from '../reducers/user';

function loadUserAPI() {
  return axios.get('/user');
}

function* loadUser(action) {
  try{
    console.log('saga logIn');
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_USER_FAILURE,
      error: err.response.data,
    })
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data)
}

function* logIn(action) {
  try{
    console.log('saga logIn');
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    })
  }
}

function logOutAPI() {
  return axios.post('/logout');
}

function* logOut() {
  try{
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    })
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try{
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,

    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    })
  }
}

function followAPI() {
  return axios.post('/api/follow')
}

function* follow(action) {
  try{
    const result = yield call(followAPI);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow')
}

function* unfollow(action) {
  try{
    const result = yield call(unfollowAPI);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow); 
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut); 
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp); 
}

export default function* userSaga() {
  yield all([
    fork(watchLoadUser),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}