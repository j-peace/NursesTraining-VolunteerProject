import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from './pages/Home'
import PatientsList from './pages/PatientsList'
import Patient from './pages/Patient'


function App () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/PatientsList" element={<PatientsList />}/>
        <Route path="/Patient" element={<Patient />}/>
      </Routes>
    </HashRouter>
  )
}

export default App;