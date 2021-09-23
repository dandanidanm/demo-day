import { types } from "../types/types";
import { db } from "../firebase/firebase-config";


export const SaveHistoria = (historia) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    const addHistoria = {
      historiaProtietario: historia.historiaProtietario,
    };
    
    const docRef = await db.collection("user").doc(`${uid}`).add(addHistoria);
    dispatch(addHistoriaClinica(docRef, addHistoria));
  };
};

export const addHistoriaClinica = (historia) => ({
  type: types.historiaClinica,
  payload: {
    ...historia,
  },
});