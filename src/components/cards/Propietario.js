import React from "react";
const Propietario = ({ prope }) => {
 
  const {
    id,
    propietarioNombre,
    propietarioApellido,
    propietarioDireccion,
    propietarioDocumento,
    propietarioTelefono,
    propietarioOcupacion,
  } = prope;

 
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              {propietarioNombre}
            </button>
          </h2>
          <div
            id={id}
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>{propietarioNombre}</p>
              <p>{propietarioApellido}</p>
              <p>{propietarioDireccion}</p>
              <p>{propietarioDocumento}</p>
              <p>{propietarioTelefono}</p>
              <p>{propietarioOcupacion}</p>

              <button>edit</button>
              <button>delete</button>

              <button>Agregar Mascota</button>
                
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Propietario;
