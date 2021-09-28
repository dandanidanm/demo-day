import { types } from "../types/types";
import { db } from "../firebase/firebase-config";

export const SavePatientData = (patient) => {
  return async (dispatch) => {
    const addPatient = {
      pacienteNombre: patient.pacienteNombre,
      pacienteEspecie: patient.pacienteEspecie,
      pacienteRaza: patient.pacienteRaza,
      pacienteSexo: patient.pacienteSexo,
      pacienteEdad: patient.pacienteEdad,
      pacienteSenales: patient.pacienteSenales,
      vacunacion: patient.vacunacion,
      habitad: patient.habitad,
      desparasitacion: patient.desparasitacion,
      producto: patient.producto,
      fecha: patient.fecha,
      estadoReproductivo: patient.estadoReproductivo,
      alimentacion: patient.alimentacion,
      tipoAlimento: patient.tipoAlimento,
      enfermedades: patient.enfermedades,
    };

    const docRef = await db.collection("mascota").add(addPatient);

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
