import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {store} from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { AppRouter } from "./router";

ReactDOM.render(
  <Provider store={store}>
      <AppRouter/>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
