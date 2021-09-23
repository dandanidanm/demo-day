import { types } from "../types/types";
import { db } from "../firebase/firebase-config";


export const SavePatientData = (patient) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    const addPatient = {
      vacunacion: [...patient.vacunacion, patient.vacunacion],
      habitad: patient.habitad,
      desparasitacion: patient.desparasitacion,
      producto: patient.producto,
      fecha: patient.fecha,
      estadoReproductivo: patient.estadoReproductivo,
      alimentacion: patient.alimentacion,
      tipoAlimento: patient.tipoAlimento,
      enfermedades: patient.enfermedades,
    };
    
    const docRef = await db.collection(`user`).doc(`${uid}`).collection("pro").doc("2").set(addPatient);
    /* const docRef = await db.collection(`${uid}/patient/data`).add(addPatient); */
    dispatch(Addpatient(docRef.id, addPatient));
  };
};

export const Addpatient = (id, patient) => ({
  type: types.patientDataAdd,
  payload: {
    id,
    ...patient,
  },
});