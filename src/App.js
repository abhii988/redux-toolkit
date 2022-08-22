import React, { useEffect } from "react";
// import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import RouteSwitch from "./components/RouteSwitch";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { increment, decrement, login } from "./actions";
import { fetchData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      {<RouteSwitch></RouteSwitch>}
      {/* <div>counter : {counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button onClick={() => dispatch(login())}>login</button>
      {logged ? <div>is logged in!</div> : <div>not logged in.</div>} */}
    </div>
  );
}

export default App;
