import React,{useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
function Calculator() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    let currentNum2=document.querySelector('#num2').value
    if(currentNum && currentNum2 === '')
    return;
    let sum= parseInt(currentNum)*parseInt(currentNum2);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="container">
      <div className="app-title">
        <h1>Calculadora de Dosis</h1>
      </div>
      <br></br>
      <div>
          <form>
      <Form.Floating className="d-flex justify-content-between">
    <Form.Control
      id="num"
      type="email"
      placeholder="Peso"
    />
    <label htmlFor="floatingInputCustom">Peso kg</label>
  </Form.Floating>
  <br></br>
  <Form.Floating>
    <Form.Control
      id="num2"
      type="email"
      placeholder="Password"
    />
    <label htmlFor="floatingPasswordCustom">Dosis mg/kg</label>
  </Form.Floating>
  </form>
  </div>
  <div className="text-center">
  <h5 type="text" id="result">Debes Administrar <span style={{color: 'green', fontSize: '30px'}}>{currentSum}</span> mg. de farmaco</h5>
  </div>
  <br></br>
  <div className="text-center">
    <Button type="button" variant="success" size="lg"onClick={Add}>Calcular</Button>
    <Button type="button" variant="success" size="lg"onClick={Clear}>Limpiar</Button>
    </div>
    </div>
    
  );
}

export default Calculator;