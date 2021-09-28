import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/index.css";
import AppRouter from "../router/AppRouter";

function AppContainer() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <AppRouter />
        </div>
      </Provider>
    </>
  );
}

export default AppContainer;
