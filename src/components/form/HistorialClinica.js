import React, { useState, useEffect } from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import HistorialPropietario from "./HistorialPropietario";
import Propietario from "../cards/Propietario";

const HistorialClinica = () => {
  const { path, url } = useRouteMatch();

  const [propietarios, setPropietarios] = useState([]);

  useEffect(() => {
    db.collection('propietarios').onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setPropietarios(documents);
    });
  }, [propietarios]);

  return (
    <>
      <div className="registro py-5 container text-center">
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
        {propietarios.map((prope) => (
        <Propietario key={prope.id} prope={prope} />
        ))}
      </div>
  
      <Switch>
        <Route path={`${path}/propietario`} component={HistorialPropietario} />
        <Route path={`${path}`} />
      </Switch>
    </>
  );
};

export default HistorialClinica;
