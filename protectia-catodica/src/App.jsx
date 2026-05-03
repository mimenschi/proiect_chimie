import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './site/Header.jsx'
import Footer from './site/Footer.jsx'
import Experiment from './pages/Experiment.jsx'
import Teorie from './pages/Teorie.jsx'
import Rocky from './site/Rocky.jsx'
import Mj from './site/Mj.jsx'
import Navbar from './site/Navbar.jsx'
import Protectia from './pages/Protectia.jsx'


function App() {
  return(

      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Protectia />} />
            <Route path="/teorie" element={<Teorie />} />
            <Route path="/experiment" element={<Experiment />} />
          </Routes>
        </div>
      </>

  );
  
}

export default App