import React from "react";
import { useForm } from "../../hooks/useForm";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import HistorialPaciente from "./HistorialPaciente";
import {SavePropietarioData} from "../../actions/propietarioActions"


const HistorialPropietario = () => {
  const { path, url } = useRouteMatch();
  console.log(path);
  const [formValue, handleInputChange] = useForm({
    propietarioNombre: "",
    propietarioApellido: "",
    propietarioDireccion: "",
    propietarioTelefono: "",
    propietarioDocumento: "",
    propietarioOcupacion: "",
  });

  const {propietarioNombre,
  propietarioApellido,
  propietarioDireccion,
  propietarioTelefono,
  propietarioDocumento,
  propietarioOcupacion} = formValue

const handleSavePropietario = (e) => {
  e.preventDefault()
  console.log("enviendo propietario")
  SavePropietarioData(formValue)
  console.log(formValue)
}

  return (
    <>
      <div className="Registro py-5 container text-center">
        <form className="formulario" onSubmit={handleSavePropietario}>
          <h1 className="h4 mb-3 font-weight-normal">N° cliente</h1>

          <h1 className="h4 mb-3 font-weight-normal">Propietario</h1>

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
          <NavLink to={`${url}/mascota`} className="btn btn-primary btn-block">
            Agregar mascota
          </NavLink>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Agregar
          </button>
        </form>
      </div>
      <Switch>
        <Route path={`${path}/mascota`} component={HistorialPaciente} />
        <Route path={`${path}`} />
      </Switch>
    </>
  );
};

export default HistorialPropietario;
