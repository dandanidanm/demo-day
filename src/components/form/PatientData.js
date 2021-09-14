import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { SavePatientData } from "../../actions/patientAction";


const habitadData = [
  {id:"habitad-1", habitad: "Domestico" },
  {id:"habitad-2", habitad: "Mixto" },
  {id:"habitad-3", habitad: "Sale eventualmente" },
  {id:"habitad-4", habitad: "Callejero" },
  {id:"habitad-5", habitad: "Finca" },
  {id:"habitad-6", habitad: "Colegio/Guarderia" },
];

const vacunacionData = [
  {id:"vacuna-1", vacunacion: "Parvo Virus" },
  {id:"vacuna-2", vacunacion: "Triple Felina" },
  {id:"vacuna-3", vacunacion: "Triple Canina" },
  {id:"vacuna-4", vacunacion: "Leucemia F." },
  {id:"vacuna-5", vacunacion: "Polivalente" },
  {id:"vacuna-6", vacunacion: "Tos Perreras" },
  {id:"vacuna-7", vacunacion: "Rabia" },
  {id:"vacuna-8", vacunacion: "otras" },
];

const PatientData = () => {
  const dispatch = useDispatch();

  const [habitads, setHabitads] = useState([]);

  const [vacuna, setVacuna] = useState([]);

  useEffect(() => {
    setHabitads(habitadData);
    setVacuna(vacunacionData);
  }, []);

  const [formValue, handleInputChange] = useForm({
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

  const { otrasVacunas, producto, fecha, tipoAlimento, enfermedades } =
    formValue;

  const handleSavePatientData = (e) => {
    e.preventDefault();
    dispatch(SavePatientData(formValue));
    
  };

  return (
    <>
      <Form onSubmit={handleSavePatientData}>
        <Row md={3} className="justify-content-center">
          <Form.Label className="text-center">Datos del paciente</Form.Label>
        </Row>

        <Row md={3} className="justify-content-center mb-4">
          <Form.Group controlId="ControlInput1">
            <Form.Label>Vacunacion</Form.Label>
            {vacuna.map((vacu) => (
              <Col key={vacu.id}>
                <Form.Check
                  type="checkbox"
                  label={vacu.vacunacion}
                  id={vacu.id}
                  name="vacunacion"
                  value={vacu.vacunacion}
                  onChange={handleInputChange}
                />
              </Col>
            ))}
            <Col>
              <Form.Control
                placeholder="Otras vacunas"
                name="otrasVacunas"
                value={otrasVacunas}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row md={3} className="justify-content-center mb-4">
          <Form.Group controlId="ControlInput2">
            <Form.Label>Habitad</Form.Label>
            {habitads.map((habit) => (
              <Col key={habit.id}>
                <Form.Check
                  type="checkbox"
                  label={habit.habitad}
                  id={habit.id}
                  name="habitad"
                  value={habit.habitad}
                  onChange={handleInputChange}
                />
              </Col>
            ))}
          </Form.Group>
        </Row>

        <Row md={3} className="justify-content-center mb-4">
          <Form.Group className="m-3" controlId="ControlInput3">
            <Form.Label>Desparasitacion</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Si"
                id="si"
                name="desparasitacion"
                value="si"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="No"
                id="no"
                name="desparasitacion"
                value="no"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Producto"
                name="producto"
                value={producto}
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="fecha"
                value={fecha}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row md={3} className="justify-content-center mb-4">
          <Form.Group controlId="ControlInput4">
            <Form.Label>Estado reproductivo</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Entero"
                id="entero"
                name="estadoReproductivo"
                value="entero"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Esterilizado"
                id="esterilizado"
                name="estadoReproductivo"
                value="esterilizado"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Gestacion"
                id="gestacion"
                name="estadoReproductivo"
                value="gestacion"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Lactancia"
                id="lactancia"
                name="estadoReproductivo"
                value="lactancia"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row md={3} className="justify-content-center mb-4">
          <Form.Group controlId="ControlInput5">
            <Form.Label>Alimentacion</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Casero"
                id="casero"
                name="alimentacion"
                value="casero"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Concentrado"
                id="concentrado"
                name="alimentacion"
                value="concentrado"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Mixtos"
                id="mixtos"
                name="alimentacion"
                value="mixtos"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Otro"
                id="otro"
                name="alimentacion"
                value="otro"
                onChange={handleInputChange}
              />
              <Col>
                <Form.Control
                  placeholder="Otros tipos de alimentos"
                  name="tipoAlimento"
                  value={tipoAlimento}
                  onChange={handleInputChange}
                />
              </Col>
            </Col>
          </Form.Group>
        </Row>

        <Row md={3} className="justify-content-center">
          <Form.Group className="mb-3" controlId="ControlTextarea">
            <Form.Label>Enfermedades anteriores</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="enfermedades"
              value={enfermedades}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row md={3} className="justify-content-center">
          <Button type="submit" variant="success" size="lg">
            Guardar
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default PatientData;
