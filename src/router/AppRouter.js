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
import User from "../components/user/User";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HistorialPaciente from "../components/form/HistorialPaciente";
import HistorialClinica from "../components/form/HistorialClinica";
import PlaceToVisit from "../components/inicio/PlaceToVisit";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/inicio/Header";
import Medscontainer from "../components/api/MedsContainer";
import Calculator from "../components/Calculadora";
import NavBar from "../components/NavBar";


const useStyles = makeStyles((theme) => ({
  root: {
    
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
    width: "100vw"
  }
}));

const AppRouter = () => {
  const classes = useStyles();

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
    <div className={classes.root}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PlaceToVisit} />
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
          <PublicRoute
            exact
            path="/meds"
            component={Medscontainer}
            isAuthenticated={isLoggedIn}
          />
          <PublicRoute
            exact
            path="/meds"
            component={Calculator}
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
            component={HistorialPaciente}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
