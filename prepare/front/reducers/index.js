import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';


// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action ) => {
    switch(action.type) {
      case HYDRATE:
          console.log('HYDRATE', action);
          return { ...state, ...action.payload };
      default: 
        return state;    // Switch 문에 이 부분이 없으면 Error massage : "user" returned undefined during initialization.
    }
  },
  user,
  post,
});

export default rootReducer;