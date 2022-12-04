import React from "react"
import './App.css'
import { Navbar } from "./components/Navbar/Navbar"
// import {Form} from "./components/Form/Form"
import {Weather} from "./components/WeatherPanel/Weather"
import {Spinner} from "./components/Spinner/Spinner"


function App() {


  return (
    <>
    <div className="App">

      <Navbar/>
      <Weather/>
      
        
    </div>
    </>
  )
}

export default App
