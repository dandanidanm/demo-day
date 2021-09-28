import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startUploading, SavePerfilData } from "../../actions/perfilActions";


const User = () => {
  const dispatch = useDispatch();
  let file = [];
  const [formEnviado, setFormEnviado] = useState(false);

  const validateSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(4, "Minimo 4 caracteres!")
      .max(40, "Maximo 40 caracteres!")
      .required("Nombres requerido"),
    apellido: Yup.string()
      .min(2, "Minimo 4 caracteres!")
      .max(70, "Maximo 40 caracteres!")
      .required("Apellidos requeridos"),
    email: Yup.string()
      .max(250, "Maximo 250 caracteres!")
      .required("Email requerido"),
    password: Yup.string()
      .min(6, "Minimo 6 caracteres!")
      .max(70, "Maximo 40 caracteres!")
      .required("contraseña requeridos"),
    password2: Yup.string()
      .min(6, "Minimo 6 caracteres!")
      .max(70, "Maximo 40 caracteres!")
      .required("repite contraseña"),
    numTarjetaPro: Yup.string()
      .min(2, "Minimo 4 caracteres!")
      .max(70, "Maximo 40 caracteres!")
      .required("Numero de tarjeta profesional requerido"),
    titulo: Yup.string()
      .min(2, "Minimo 4 caracteres!")
      .max(70, "Maximo 40 caracteres!")
      .required("Titulo requerido"),
    telefono: Yup.number()
      .min(8, "Minimo 8 caracteres!")
      .required("Telefono requerido"),
 
  });


  const handleFileChange = (e) => {

    file = e.target.files[0];

    console.log(file);
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          password2: "",
          numTarjetaPro: "",
          titulo: "",
          telefono: "",
          fotoUser:null
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          setFormEnviado(true);
          setTimeout(() => setFormEnviado(false), 3000);
          dispatch(SavePerfilData(values));

        }}
        >
        {({ errors }) => (
          <Form className="registro container">
              <div className="formulario text-center justify-content-center">
              <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="fotoUser">Foto
            </label>
              <input
                type="file"
                id="fotoUser"
                name="fotoUser"
                onChange={handleFileChange}
                placeholder="Sube tu foto"
                
                />
              <ErrorMessage
                className="error"
                name="fotoUser"
                component={() => <div className="error">{errors.fotoUser}</div>}
              />
              </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="nombre">Nombres
              </label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tus nombres"
                />
              <ErrorMessage
                className="error"
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="apellido">Apellidos
              </label>
              <Field
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Ingresa tus Apellidos"
                />
              <ErrorMessage
                name="apellido"
                component={() => <div className="error">{errors.apellido}</div>}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="email">Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu email"
                />
              <ErrorMessage
                className="error"
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="password">Contraseña
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa contraseña"
                />
              <ErrorMessage
                className="error"
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="password2">Repite contraseña
              </label>
              <Field
                type="password"
                id="password2"
                name="password2"
                placeholder="Repite contraseña"
                />
              <ErrorMessage
                className="error"
                name="password2"
                component={() => (
                  <div className="error">{errors.password2}</div>
                )}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="numTarjetaPro">N° de tarjeta profesional
              </label>
              <Field
                type="text"
                id="numTarjetaPro"
                name="numTarjetaPro"
                placeholder="Ingresa numero de tarjeta profesional"
                />
              <ErrorMessage
                name="numTarjetaPro"
                component={() => (
                  <div className="error">{errors.numTarjetaPro}</div>
                )}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="titulo">Titulo obtenido
              </label>
              <Field
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Ingresa tu titulo"
                />
              <ErrorMessage
                name="titulo"
                component={() => <div className="error">{errors.titulo}</div>}
              />
            </div>
            <div className="d-flex flex-column justify-content-center aling-items-center">
              <label htmlFor="telefono">Telefono
              </label>
              <Field
                type="text"
                id="telefono"
                name="telefono"
                placeholder="Ingresa contraseña"
                />
              <ErrorMessage
                className="error"
                name="telefono"
                component={() => <div className="error">{errors.telefono}</div>}
              />
            </div>
            <button type="submit">Guardar</button>
            {formEnviado && <p className="exito">Enviando datos con exito!!</p>}
          </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default User;
