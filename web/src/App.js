import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import PatientsList from './pages/PatientsList'
import Patient from './pages/Patient'


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/PatientsList" element={<PatientsList />}/>
        <Route path="/Patient" element={<Patient />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;