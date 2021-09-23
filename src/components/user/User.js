import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { SavePerfilData } from "../../actions/perfilActions";
import { startUploading } from "../../actions/perfilActions";

const User = () => {
  
  const dispatch = useDispatch();
  let file = "";
  const [formEnviado, setFormEnviado] = useState(false);

  const validateSchema = Yup.object().shape({
    /* fotoUser: Yup.mixed()
    .required("Ingresa tu foto de perfil"), */
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
    /* tarjetaProImg: Yup.mixed()
    .required("Ingresa tu tarjeta profesional"),
    firmaImg: Yup.mixed()
    .required("Ingresa tu firma digital"), */
  });
  
  const handleFileChange = (e) =>{
    file = e.target.files[0];
    console.log(file)
    if (file){
      dispatch(startUploading(file))
    }
  }



  return (
    <>
      <Formik
        initialValues={{
          fotoUser: null,
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          password2: "",
          numTarjetaPro: "",
          titulo: "",
          telefono: "",
          tarjetaProImg: null,
          firmaImg: null,
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          setFormEnviado(true);
          setTimeout(() => 
          setFormEnviado(false), 3000);
          dispatch(SavePerfilData(values));
          
        
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="">Foto</label>
              <Field
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
            <div>
              <label htmlFor="nombre">Nombres</label>
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
              <label htmlFor="">Email</label>
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
            <div>
              <label htmlFor="">Contraseña</label>
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
            <div>
              <label htmlFor="">Repite contraseña</label>
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
            <div>
              <label htmlFor="">Telefono</label>
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
            <div>
              <label htmlFor="">Tarjeta Profesional</label>
              <Field
                type="file"
                id="tajetaProImg"
                name="tajetaProImg"
                onChange={handleFileChange}
                placeholder="Sube tu tarjeta profesional"
              />
              <ErrorMessage
                className="error"
                name="tarjetaProImg"
                component={() => (
                  <div className="error">{errors.tarjetaProImg}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="">Firma Digital</label>
              <Field
                type="file"
                id="firmaImg"
                name="firmaImg"
                onChange={handleFileChange}
                placeholder="Sube tu firma digital"
              />
              <ErrorMessage
                className="error"
                name="firmaImg"
                component={() => <div className="error">{errors.firmaImg}</div>}
              />
            </div>
            <button type="submit" >Guardar</button>
            {formEnviado && <p className="exito">Enviando datos con exito!!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default User;
