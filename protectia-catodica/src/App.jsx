import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './site/Header.jsx'
import Footer from './site/Footer.jsx'
import Experiment from './pages/Experiment.jsx'
import Teorie from './pages/Teorie.jsx'

function App() {
  return(
    <>
        <Header/>
        
        <Router>
                <Routes>
                    <Route path="/Teorie" element={<Teorie />} />
                    <Route path="/Experiment" element={<Experiment />} />
                </Routes>
            </Router>
        <Footer/>
    </>
  );
  
}

export default App