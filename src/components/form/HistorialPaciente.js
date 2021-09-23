import React from "react";
import { useForm } from "../../hooks/useForm";

const HistorialPaciente = () => {
  const [formValue, handleInputChange] = useForm({
    pacienteNombre: "",
    pacienteEspecie: "",
    pacienteRaza: "",
    pacienteSexo: "",
    pacienteEdad: "",
    pacienteSenales: "",
  });

  return (
    <>
      <div className="Registro py-5 container text-center">
        <form className="formulario">
          <h1 className="h4 mb-3 font-weight-normal">N° Historia</h1>


          <input
            type="text"
            id="pacienteNombre"
            className="form-control mt-1"
            placeholder="Nombre"
            required=""
            name="pacienteNombre"
            value=""
            onChange="{handleInputChange}"
          />

          <input
            type="text"
            id="pacienteEspecie"
            className="form-control mt-1"
            placeholder="Especie"
            required=""
            name="pacienteEspecie"
            value=""
            onChange="{handleInputChange}"
          />

          <input
            type="text"
            id="pacienteRaza"
            className="form-control mt-1"
            placeholder="Raza"
            required=""
            name="pacienteRaza"
            value=""
            onChange="{handleInputChange}"
          />
          <input
            type="text"
            id="pacienteSexo"
            className="form-control mt-1"
            placeholder="Sexo"
            required=""
            name="pacienteSexo"
            value=""
            onChange="{handleInputChange}"
          />

          <input
            type="text"
            id="pacienteEdad"
            className="form-control mt-1"
            placeholder="Edad"
            required=""
            name="pacienteEdad"
            value=""
            onChange="{handleInputChange}"
          />

          <input
            type="text"
            id="pacienteSenales"
            className="form-control mt-1"
            placeholder="Señales"
            required=""
            name="pacienteSenales"
            value=""
            onChange="{handleInputChange}"
          />
          <button type="submit" className="btn btn-primary btn-block">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default HistorialPaciente;
