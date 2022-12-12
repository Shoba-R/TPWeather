// import { useState } from "react"
import React from "react"
import { useState } from "react"
import "./Form.css"



const Form = ({newLocation}) => {
   const[city,setCity]=useState("");

   const onSubmit = (e)=>{
      e.preventDefault();
      console.log({city});
      if(city==="" || !city)
      return

      newLocation(city);
   }
    return(
        <div className="container">
           <form onSubmit={onSubmit}>
             <div className="input-group mb-2 mx-auto">
               <input type="text" className="form-control"
                placeholder="Nombre de la ciudad..." onChange={(e)=>setCity(e.target.value)}/>
               <button className="btn  input-group-text" type="submit">Buscar</button>
             </div>
          </form> 
         </div>
    );
}

export { Form }