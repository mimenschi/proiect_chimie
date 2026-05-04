import React from 'react'
import Footer from '../site/Footer';
import Voltage from '../components/Voltage';
import Mediu from '../components/Mediu.jsx';
import Metals from '../components/Metals.jsx';
import Formulas from '../components/Formulas.jsx';

function Experiment() {

  const handleValueFromMediu = (valoare) => {
        console.log("Părintele a primit:", valoare);
      };

  return (
    <>
      <Voltage />
      <Mediu />
      <Metals onSelection={handleValueFromMediu}/>
      <Formulas />
      <Footer />
    </>
  );
}

export default Experiment