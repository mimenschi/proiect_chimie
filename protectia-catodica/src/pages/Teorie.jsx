import React from 'react'
import Header from '../site/Header'
import Footer from '../site/Footer'

function Teorie() {
  return(
    <>
      <h2>Reactii chimie:</h2>
      <div>
        <h3 className='textTeorie'>1. Coroziunea cu depolarizare de hidrogen</h3>
        <div className='textReactii'>
          <strong>In medii acide:</strong>
          <pre>
            Oxidare: Fe → Fe²⁺ + 2e⁻
          </pre>
          <pre>
            Reducere: 2H⁺ + 2e⁻ → H₂
          </pre>
          <pre>
            Reacție globală: Fe + 2H⁺ → Fe²⁺ + H₂
          </pre>

          <strong>In medii neutre si alcaline:</strong>
          <pre>
            Oxidare: Fe → Fe²⁺ + 2e⁻
          </pre>
          <pre>
            Reducere: 2H₂O + 2e⁻ → 2OH⁻ + H₂
          </pre>
          <pre>
            Reacție globală: Fe + 2H₂O → Fe²⁺ + 2OH⁻ + H₂
          </pre>
        </div>
      </div>

      <div>
        <h3 className='textTeorie'>2. Coroziunea cu depolarizare de oxigen</h3>
        <div className='textReactii'>
          <strong>In medii acide:</strong>
          <pre>
            Oxidare: Fe → Fe²⁺ + 2e⁻
          </pre>
          <pre>
            Reducere: 2H⁺ + ½O₂ + 2e⁻ → H₂O
          </pre>
          <pre>
            Reacție globală: Fe + 2H⁺ + ½O₂ → Fe²⁺ + H₂O
          </pre>

          <strong>In medii neutre si alcaline:</strong>
          <pre>
            Oxidare: Fe → Fe²⁺ + 2e⁻
          </pre>
          <pre>
            Reducere: H₂O + ½O₂ + 2e⁻ → 2OH⁻
          </pre>
          <pre>
            Reacție globală: Fe + H₂O + ½O₂ → Fe(OH)₂
          </pre>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Teorie