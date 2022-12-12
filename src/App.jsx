import React from "react"
import './App.css'
import { Navbar } from "./components/Navbar/Navbar"
import {Weather} from "./components/Weather/Weather"





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
