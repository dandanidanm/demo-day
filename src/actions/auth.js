import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider
  } from "../firebase/firebase-config";
  import { types } from "../types/types";
  import Swal from "sweetalert2";
  
  export const startGoogleLogin = () => {
    return (dispatch) => {
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
          dispatch(login(user.uid, user.displayName));
        });
    };
  };
  
  export const startFacebookLogin = () => {
    return (dispatch) => {
      firebase
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(({ user }) => {
          dispatch(login(user.uid, user.displayName));
        });
    };
  };
  
  export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(error => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
                footer: "",
              });
            })
    }
  }
  
  export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, name)
        .then( async ({ user }) => {
          await user.updateProfile({ displayName: name });
  
          dispatch(login(user.uid, user.displayName));
          Swal.fire({
            position: "top-end",
            text: "Usuario Creado",
            icon: "success",
            title: user.displayName,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
            footer: "",
          });
        });
    };
  };
  
  export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  });
  
  export const startLogout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
    };
  };
  
  export const logout = () => ({
    type: types.logout,
  });
  