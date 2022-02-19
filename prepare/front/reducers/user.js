export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
          ...state,          // 안바꾸고 싶은 것은 Object spread로 참조관계 유지해주기.
          isLoggedIn: true,         // 내가 바꾸고 싶은것만 정확하게 써주기
          me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,           
        isLoggedIn: false,        
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;