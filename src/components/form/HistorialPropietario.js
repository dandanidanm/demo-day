import React from "react";
import { useForm } from "../../hooks/useForm";
import { SavePropietarioData } from "../../actions/propietarioActions"
import { useDispatch } from "react-redux";

const HistorialPropietario = () => {
   
  const dispatch = useDispatch();
  const [formValue, handleInputChange] = useForm({
    propietarioNombre: "",
    propietarioApellido: "",
    propietarioDireccion: "",
    propietarioTelefono: "",
    propietarioDocumento: "",
    propietarioOcupacion: "",
  });
  
  const {
    propietarioNombre,
    propietarioApellido,
    propietarioDireccion,
    propietarioTelefono,
    propietarioDocumento,
    propietarioOcupacion} = formValue
    
    
    const handleSavePropietario = (e) => {
  e.preventDefault()
  dispatch(SavePropietarioData(formValue)) 
  console.log("enviendo propietario")
  console.log(formValue)
}

  return (
    <>
      <div className="Registro py-5 container text-center">
        <form className="formulario" onSubmit={handleSavePropietario}>
          <h1 className="h4 mb-3 font-weight-normal">N° cliente</h1>

          <h2 className="h4 mb-3 font-weight-normal">Propietario</h2>

          <input
            type="text"
            id="propietarioNombre"
            className="form-control mt-1"
            placeholder="Nombres"
            required=""
            name="propietarioNombre"
            value={propietarioNombre}
            onChange={handleInputChange}
          />

          <input
            type="text"
            id="propietarioApellido"
            className="form-control mt-1"
            placeholder="Apellidos"
            required=""
            name="propietarioApellido"
            value={propietarioApellido}
            onChange={handleInputChange}
          />

          <input
            type="text"
            id="propietarioDireccion"
            className="form-control mt-1"
            placeholder="Direccion"
            required=""
            name="propietarioDireccion"
            value={propietarioDireccion}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="propietarioTelefono"
            className="form-control mt-1"
            placeholder="Telefono"
            required=""
            name="propietarioTelefono"
            value={propietarioTelefono}
            onChange={handleInputChange}
          />

          <input
            type="text"
            id="propietarioDocumento"
            className="form-control mt-1"
            placeholder="DNI"
            required=""
            name="propietarioDocumento"
            value={propietarioDocumento}
            onChange={handleInputChange}
          />

          <input
            type="text"
            id="propietarioOcupacion"
            className="form-control mt-1"
            placeholder="Ocupacion"
            required=""
            name="propietarioOcupacion"
            value={propietarioOcupacion}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default HistorialPropietario;
