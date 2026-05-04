import React from 'react'

import Footer from '../site/Footer';
import Components from '../components/Voltage';
import Mediu from '../components/Mediu.jsx';
import Metals from '../components/Metals.jsx';
import Formulas from '../components/Formulas.jsx';


function Experiment() {

  return (
    <>
      <Components />
      <Formulas />
      <Footer />
    </>
  );
}

export default Experiment