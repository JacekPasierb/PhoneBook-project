import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import "./index.css";
import { persistore, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistore}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </BrowserRouter>
);
