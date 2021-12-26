import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Provider-connects global state/store to entire app
import { Provider } from "react-redux";

// STORE-globalized state that holds data/state info of the application and is accessible by everyone on the application without passing through props
import { createStore } from "redux";
import allReducer from "./reducers";

const store = createStore(allReducer);

// ACTION-describes what you want to do
// const increment=()=>{
//   return{
//     type:'INCREMENT'
//   }
// }

// const decrement=()=>{
//   return {
//     type:'DECREMENT'
//   }
// }

// REDUCER-describes how your action transforms one state into next state
// const counter=(state=0,action)=>{
//     switch(action.type){
//       case "INCREMENT":
//         return state+1;
//       case "DECREMENT":
//         return state-1;
//     }
// }

// let store=createStore(counter);

// // Display it in console
// store.subscribe(()=>console.log(store.getState()));

// // DISPATCH-execute the action based on events
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
