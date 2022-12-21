import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./context/Context";
import Context from "./context/Context";
import firebase from "./firebase/config";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
