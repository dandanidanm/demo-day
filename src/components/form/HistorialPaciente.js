import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { SavePatientData } from "../../actions/patientAction";

const habitadData = [
  { id: "habitad-1", habitad: "Domestico" },
  { id: "habitad-2", habitad: "Mixto" },
  { id: "habitad-3", habitad: "Sale eventualmente" },
  { id: "habitad-4", habitad: "Callejero" },
  { id: "habitad-5", habitad: "Finca" },
  { id: "habitad-6", habitad: "Colegio/Guarderia" },
];

const vacunacionData = [
  { id: "vacuna-1", vacunacion: "Parvo Virus" },
  { id: "vacuna-2", vacunacion: "Triple Felina" },
  { id: "vacuna-3", vacunacion: "Triple Canina" },
  { id: "vacuna-4", vacunacion: "Leucemia F." },
  { id: "vacuna-5", vacunacion: "Polivalente" },
  { id: "vacuna-6", vacunacion: "Tos Perreras" },
  { id: "vacuna-7", vacunacion: "Rabia" },
  { id: "vacuna-8", vacunacion: "otras" },
];
const HistorialPaciente = () => {
  const dispatch = useDispatch();

  const [habitads, setHabitads] = useState([]);

  const [vacuna, setVacuna] = useState([]);

  useEffect(() => {
    setHabitads(habitadData);
    setVacuna(vacunacionData);
  }, []);

  const [formValue, handleInputChange] = useForm({
    pacienteNombre: "",
    pacienteEspecie: "",
    pacienteRaza: "",
    pacienteSexo: "",
    pacienteEdad: "",
    pacienteSenales: "",
    vacunacion: "",
    otrasVacunas: "",
    habitad: "",
    desparasitacion: "",
    producto: "",
    fecha: "",
    estadoReproductivo: "",
    alimentacion: "",
    tipoAlimento: "",
    enfermedades: "",
  });

  const {
    pacienteNombre,
    pacienteEspecie,
    pacienteRaza,
    pacienteSexo,
    pacienteEdad,
    pacienteSenales,
    otrasVacunas,
    producto,
    fecha,
    tipoAlimento,
    enfermedades,
  } = formValue;

  const handleSavePaciente = (e) => {
    e.preventDefault();
    dispatch(SavePatientData(formValue));
    console.log("enviando paciente");
    console.log(formValue);
    console.log(SavePatientData(formValue));
  };

  return (
    <>
      <div className="py-5 container text-center">
        <form className="formulario" onSubmit={handleSavePaciente}>
          <h1 className="h4 mb-3 font-weight-normal w-100">N° Historia</h1>
          <h2 className="h4 mb-3 font-weight-normal w-100">
            Datos del paciente
          </h2>
          <div className="d-flex flex-wrap justify-content-around">
            <label htmlFor="pacienteNombre">
              Nombre de tu Mascota
              <input
                type="text"
                id="pacienteNombre"
                className="form-control mt-1"
                placeholder="Nombre"
                required=""
                name="pacienteNombre"
                value={pacienteNombre}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="pacienteEspecie">
              ¿Que especie es tu mascota?
              <input
                type="text"
                id="pacienteEspecie"
                className="form-control mt-1"
                placeholder="Especie"
                required=""
                name="pacienteEspecie"
                value={pacienteEspecie}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="pacienteRaza">
              ¿Que raza es?
              <input
                type="text"
                id="pacienteRaza"
                className="form-control mt-1"
                placeholder="Raza"
                required=""
                name="pacienteRaza"
                value={pacienteRaza}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="pacienteSexo">
              ¿Que sexo tiene?
              <input
                type="text"
                id="pacienteSexo"
                className="form-control mt-1"
                placeholder="Sexo"
                required=""
                name="pacienteSexo"
                value={pacienteSexo}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="pacienteEdad">
              ¿Que edad tiene?
              <input
                type="text"
                id="pacienteEdad"
                className="form-control mt-1"
                placeholder="Edad"
                required=""
                name="pacienteEdad"
                value={pacienteEdad}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="pacienteSenales">
              ¿Señales especificas?
              <input
                type="text"
                id="pacienteSenales"
                className="form-control mt-1"
                placeholder="Señales"
                required=""
                name="pacienteSenales"
                value={pacienteSenales}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="d-flex">
            <div>
              <h3 className="h4 mb-3 font-weight-normal">Vacunacion</h3>

              {vacuna.map((vacu) => (
                <label htmlFor={vacu.id}>
                  {vacu.vacunacion}
                  <input
                    key={vacu.id}
                    type="radio"
                    id={vacu.id}
                    name="vacunacion"
                    value={vacu.vacunacion}
                    onChange={handleInputChange}
                  />
                </label>
              ))}

              <input
                type="text"
                id="otrasVacunas"
                placeholder="Otras vacunas"
                required=""
                name="otrasVacunas"
                value={otrasVacunas}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h3 className="h4 mb-3 font-weight-normal">Habitad</h3>

              {habitads.map((habit) => (
                <label htmlFor={habit.id}>
                  {habit.habitad}
                  <input
                    key={habit.id}
                    type="radio"
                    id={habit.id}
                    name="habitad"
                    value={habit.habitad}
                    onChange={handleInputChange}
                  />
                </label>
              ))}
            </div>
            <div className="d-flex flex-column">
              <h3 className="h4 w-100 mb-3 font-weight-normal">
                Desparasitacion
              </h3>

              <label htmlFor="si">
                Si
                <input
                  type="radio"
                  id="si"
                  name="desparasitacion"
                  value="si"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="no">
                No
                <input
                  type="radio"
                  id="no"
                  name="desparasitacion"
                  value="no"
                  onChange={handleInputChange}
                />
              </label>
              <div className="d-flex flex-column">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Producto"
                  name="producto"
                  value={producto}
                  onChange={handleInputChange}
                />

                <label htmlFor="fecha">Fecha</label>
                <input
                  id="fecha"
                  type="date"
                  name="fecha"
                  value={fecha}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <h3 className="h4 mb-3 font-weight-normal">
                Estado reproductivo
              </h3>

              <label htmlFor="entero">
                Entero
                <input
                  type="radio"
                  id="entero"
                  name="estadoReproductivo"
                  value="entero"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="esterilizado">
                Esterilizado
                <input
                  type="radio"
                  id="esterilizado"
                  name="estadoReproductivo"
                  value="esterilizado"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="gestacion">
                Gestacion
                <input
                  type="radio"
                  id="gestacion"
                  name="estadoReproductivo"
                  value="gestacion"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="lactancia">
                Lactancia
                <input
                  type="radio"
                  id="lactancia"
                  name="estadoReproductivo"
                  value="lactancia"
                  onChange={handleInputChange}
                />
              </label>

              <h3 className="h4 mb-3 font-weight-normal">Alimentacion</h3>

              <label htmlFor="casero">
                Casero
                <input
                  type="radio"
                  id="casero"
                  name="alimentacion"
                  value="casero"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="concentrado">
                Concentrado
                <input
                  type="radio"
                  id="concentrado"
                  name="alimentacion"
                  value="concentrado"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="mixtos">
                Mixtos
                <input
                  type="radio"
                  id="mixtos"
                  name="alimentacion"
                  value="mixtos"
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="otro">
                Otro
                <input
                  type="radio"
                  id="otro"
                  name="alimentacion"
                  value="otro"
                  onChange={handleInputChange}
                />
              </label>

              <input
                type="text"
                placeholder="Otros tipos de alimentos"
                name="tipoAlimento"
                value={tipoAlimento}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-100">
            <h3 className="h4 mb-3 font-weight-normal">
              Enfermedades anteriores
            </h3>

            <textarea
              name="enfermedades"
              value={enfermedades}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default HistorialPaciente;
