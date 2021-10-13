import reducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk);
const store = createStore(reducer, middlewares);

export default store;
