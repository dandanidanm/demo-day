import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "../styles/index.css";
import AppRouter from "../router/AppRouter";
import NavBar from "../components/NavBar";



function AppContainer() {

  return (
    <>

  <Provider store={store}>
      <div className="container">
        <NavBar />
        <AppRouter />
      </div>
  </Provider>
      
    </>
  );
}

export default AppContainer;