import { types } from "../types/types";
import { db } from "../firebase/firebase-config";


export const SavePropietarioData = (propietario) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    const addPropietario = {
        propietarioNombre: propietario.propietarioNombre,
        propietarioApellido: propietario.propietarioApellido,
        propietarioDireccion: propietario.propietarioDireccion,
        propietarioTelefono: propietario.propietarioTelefono,
        propietarioDocumento: propietario.propietarioDocumento,
        propietarioOcupacion: propietario.propietarioOcupacion,
    };
    
    const docRef = await db.collection(`${uid}/propietario/data`).add(addPropietario);
    dispatch(addPropietarioData(docRef.id, addPropietario));
  };
};

export const addPropietarioData = (id, propietario) => ({
  type: types.PropietarioData,
  payload: {
    id,
    ...propietario,
  },
});