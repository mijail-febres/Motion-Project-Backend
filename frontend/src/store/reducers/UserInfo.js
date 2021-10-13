const initialState = {
  token: null,
  userInfo: null,
  userClicked: null,
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "setTokenAndUser":
      return {
        ...state,
        token: action.payload[0],
        userInfo: action.payload[1],
      };
    case "setToken":
      return {
        ...state,
        token: action.payload,
      };
    case "setUserInfo":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "logOut":
      return {
        ...state,
        token: null,
        userInfo: null,
      };
    case "setUserClicked":
      return {
        ...state,
        userClicked: action.payload,
      };
    default:
      return state;
  }
};

export default userInfo;
