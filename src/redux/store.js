// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";

const middlewares = [thunk];

// export const store = configureStore({
//   reducer: {

//   }
// });

export const store = createStore(
  allReducers,
  {},
  // localStorage.getItem("redux")
  //   ? JSON.parse(
  //       localStorage.getItem("redux") ? localStorage.getItem("redux") : "{}"
  //     )
  //   : {},
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.subscribe((state) => {
//   console.log(state);
//   localStorage.setItem("redux", JSON.stringify(state.getState()));
// });
