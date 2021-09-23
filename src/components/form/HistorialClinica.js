import React, { useState } from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import HistorialPropietario from "./HistorialPropietario";

const propietarioData = [{
  
}]

const HistorialClinica = () => {
  const [agregado, setAgregado] = useState(false)
  const { path, url } = useRouteMatch();

  console.log(propietarioData)

  return (
    <>
      <div className="Registro py-5 container text-center">
        <h1 className="h4 mb-3 font-weight-normal">Historias Clinicas</h1>

        <NavLink
          to={`${url}/propietario`}
          className="btn btn-primary btn-block"
        >
          Agregar propietario
        </NavLink>

        <input
          type="search"
          id="pacienteBuscar"
          className="form-control mt-1"
          placeholder="Buscar"
          required=""
          name="pacienteBuscar"
          value=""
          onChange=""
        />
        {agregado && <div className="accordion" id="accordionExample">
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
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>}
      </div>
      <Switch>
        <Route path={`${path}/propietario`} component={HistorialPropietario} />
        <Route path={`${path}`} />
      </Switch>
    </>
  );
};

export default HistorialClinica;
