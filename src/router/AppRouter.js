import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "../router/PrivateRouter";
import { PublicRoute } from "../router/PublicRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebase-config";
import Loading from "../components/Loading";
import PatientData from "../components/form/PatientData";
import User from "../components/user/User";
import Navbar from "../components/NavBar";
import Inicio from "../components/Inicio";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HistorialPaciente from "../components/form/HistorialPaciente";
import HistorialPropietario from "../components/form/HistorialPropietario";
import HistorialClinica from "../components/form/HistorialClinica";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <Loading />;
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <PublicRoute
          exact
          path="/auth/login"
          component={Login}
          isAuthenticated={isLoggedIn}
        />
        <PublicRoute
          exact
          path="/auth/register"
          component={Register}
          isAuthenticated={isLoggedIn}
        />

        <PrivateRoute
          exact
          path="/user"
          component={User}
          isAuthenticated={isLoggedIn}
        />
         <PrivateRoute
          path="/form/historia"
          component={HistorialClinica}
          isAuthenticated={isLoggedIn}
        /> 

        <PrivateRoute
          exact
          path="/form/patient"
          component={PatientData}
          isAuthenticated={isLoggedIn}
        />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
