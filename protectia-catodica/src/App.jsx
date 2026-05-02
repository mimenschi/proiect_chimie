import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './site/Header.jsx'
import Footer from './site/Footer.jsx'
import Experiment from './pages/Experiment.jsx'
import Teorie from './pages/Teorie.jsx'
import Rocky from './site/Rocky.jsx'
import Mj from './site/Mj.jsx'



function App() {
  return(
    <>
        <Router>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/Teorie" element={<Teorie />} />
                    <Route path="/Experiment" element={<Experiment />} />
                </Routes>
            </Router>
        <Rocky />
        <Mj />
        <Footer/>
    </>
  );
  
}

export default App