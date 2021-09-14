import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "../router/PrivateRouter";
import { PublicRoute } from "../router/PublicRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebase-config";
import Loading from "../components/Loading";
import PatientData from "../components/form/PatientData"
import User from "../components/user/User";


const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
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
    return <Loading />
}
  return (
    <Router>
      <Switch>


        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={isLoggedIn}
        />

        
        <PrivateRoute
          exact
          path="/"
          component={User}
          isAuthenticated={isLoggedIn}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
