import React, {useEffect, useState} from 'react'
import Meds from './Meds'


const Medscontainer = () => {

  const [medics, setmedics] = useState([]);

  const initialUrl = "https://vettapp-9e130-default-rtdb.firebaseio.com/results.json";

  const fetchMedics = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setmedics(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchMedics(initialUrl)
    return () => {
      
    }
  }, [])

  return (
    <div className="container">
      <Meds medics={medics} />
    </div>
  )
}

export default Medscontainer;