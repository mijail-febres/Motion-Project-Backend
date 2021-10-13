import userInfo from "./UserInfo";
import friendsPosts from "./FriendsPosts";
import { combineReducers } from "redux";

const reducer = combineReducers({
  user: userInfo,
  friendsPosts: friendsPosts,
});

export default reducer;
