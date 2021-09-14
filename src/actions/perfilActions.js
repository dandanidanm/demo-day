import { types } from "../types/types";
import { db } from "../firebase/firebase-config";


export const SavePerfilData = (user) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    const addNewUser = {
      nombre: user.nombre,
      apellido: user.apellido,
      numTarjetaPro: user.numTarjetaPro,
      titulo: user.titulo
    };
    
    const docRef = await db.collection(`${uid}/user/data`).add(addNewUser);
    dispatch(addUser(docRef.id, addNewUser));
  };
};

export const addUser = (id, user) => ({
  type: types.perfil,
  payload: {
    id,
    ...user,
  },
});