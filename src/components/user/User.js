import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {SavePerfilData} from "../../actions/perfilActions"

const User = () => {
  const dispatch = useDispatch();

  const [formEnviado, setFormEnviado] = useState(false);

  const validateSchema = Yup.object().shape({
    fotoUser: Yup.mixed().required('Ingresa tu foto de perfil'),
    nombre: Yup.string()
      .min(4, 'Minimo 4 caracteres!')
      .max(40, 'Maximo 40 caracteres!')
      .required('Nombres requerido'),
    apellido: Yup.string()
    .min(2, 'Minimo 4 caracteres!')
    .max(70, 'Maximo 40 caracteres!')
    .required('Apellidos requeridos'),
    numTarjetaPro: Yup.string()
    .min(2, 'Minimo 4 caracteres!')
    .max(70, 'Maximo 40 caracteres!')
    .required('Numero de tarjeta profesional requerido'),
    titulo: Yup.string()
    .min(2, 'Minimo 4 caracteres!')
    .max(70, 'Maximo 40 caracteres!')
    .required('Titulo requerido'),

  });
  return (
    <>
      <Formik
        initialValues={{
          fotoUser:null,
          nombre: "",
          apellido: "",
          numTarjetaPro: "",
          titulo: "",
        }}
        validationSchema={validateSchema}        
        onSubmit={(values, {resetForm}) => {
         resetForm()
          console.log(values)

          setFormEnviado(true);
          setTimeout(() => setFormEnviado(false), 5000);
          console.log("enviando...");

          dispatch(SavePerfilData(values))
        }}
      >
        {({errors}) => (
          <Form className="formulario">
          
            <div>
              <label htmlFor="">Foto</label>
              <Field
                type="file"
                id="fotoUser"
                name="fotoUser"
                placeholder="Sube tu foto"
              />
              <ErrorMessage className="error"
                name="fotoUser"
                component={() => <div className="error">{errors.fotoUser}</div>}
              />
            </div>
            <div>
              <label htmlFor="nombre">Nombres</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tus nombres"
              />
              <ErrorMessage className="error"
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="apellido">Apellidos</label>
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
            <div>
              <label htmlFor="numTarjetaPro">N° de tarjeta profesional</label>
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
            <div>
              <label htmlFor="titulo">Titulo obtenido</label>
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
            <button type="submit" to="">Guardar</button>
            {formEnviado && <p className="exito">Enviando datos con exito!!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default User;
