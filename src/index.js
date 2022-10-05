import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// thunk basically enables async functionality to redux (since redux doesn't have it)
import thunk from "redux-thunk";

// setting up redux
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/allReducers";

// connecting redux app to react-app
import { Provider } from "react-redux";

// creating redux store
const store = createStore(rootReducer, applyMiddleware(thunk)); //createStore only takes 2 args, to add more, they've to be composed and wrapped inside applyMiddleware()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
