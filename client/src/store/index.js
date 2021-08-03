import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const intialState = {
  tes: "ini tes",
  isLogin: false,
};

function reducer(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOGIN":
      return { ...state, isLogin: payload };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
