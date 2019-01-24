import React from "react";
import ReactDOM from "react-dom";
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import App from "./App";

 const store = createStore(
   rootReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
