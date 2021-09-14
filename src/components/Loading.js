import React, { useState, useEffect} from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import vetApp from "../styles/vetApp.jpeg"
const Loading = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 10000)
    }, [])
  
  
    return (
        <div className="text-center" role="alert">
           <img src={vetApp} alt="logo" style={{ width: "250px", height: "250px" }} />
           <h1>Cargando...</h1>
           {
             loading ?<PropagateLoader 
             color={"#236a47"} 
             loading={loading} 
             size={20} 
             />
            :console.log('hola')
           }
        </div>
    )
}

export default Loading