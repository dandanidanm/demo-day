import { types } from "../types/types";
import { db } from "../firebase/firebase-config";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload"


let fileUrl = [];
export const SavePerfilData = (user) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const addNewUser = {
      fotoUser: fileUrl,
      nombre: user.nombre,
      apellido: user.apellido,
      email:user.email,
      numTarjetaPro: user.numTarjetaPro,
      titulo: user.titulo,
      telefono: user.telefono,
     
    };
console.log(addNewUser)
    const docRef = await db.collection('user').doc(`id-${uid}`).set(addNewUser);
    dispatch(addUser(docRef, addNewUser));
    
  };
};

export const startUploading = (file) => {
  return async () => {

      Swal.fire({
          title: 'Uploading...',
          text: 'Please wait ...',
          allowOutsideClick: false,
          onBeforeOpen: () => {
              Swal.showLoading()
          }
      })

      fileUrl = await fileUpload(file)
      console.log(fileUrl)
      Swal.close()
     return fileUrl
  }
}


export const addUser = ( user ) => ({
  type: types.perfil,
  payload: {
    ...user,
  },
});
