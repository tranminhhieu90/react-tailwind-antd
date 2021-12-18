import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {store, persistor} from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { AppRouter } from "./router";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <AppRouter/>
     </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
