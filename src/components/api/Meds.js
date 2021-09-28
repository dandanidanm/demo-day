import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';


const Meds = ({ medics = [] }) => {

    return (
        
        <div className="row">
            {medics.map ((item, index) => (
                    <div key= {index}className="">
                        <br></br>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {item.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Table striped bordered hover size="sm" variant="success">
                                <thead>
                                    <tr>
                                    <th>Especies</th>
                                    <th>Dosis</th>
                                    <th>Vía</th>
                                    <th>Frecuencia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{item.Especies}</td>
                                    <td>{item.Dosis}</td>
                                    <td>{item.Via}</td>
                                    <td>{item.Frecuencia}</td>
                                    </tr>
                                </tbody>
                                <br></br>
                                <thead>
                                    <tr>
                                    <th>Indicaciones</th>
                                    <th>Contraindicaciones</th>
                                    <th>Acción</th>
                                    <th>Nombres Comerciales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>{item.indicaciones}</td>
                                <td>{item.Contraindicaciones}</td>
                                <td>{item.Accion}</td>
                                <td>{item.NombresComerciales}</td>
                                </tr>
                                </tbody>
                                </Table>
                                </Dropdown.Menu>
                                </Dropdown>
                        </div>
                ))
            }
        </div>
    )
}

export default Meds