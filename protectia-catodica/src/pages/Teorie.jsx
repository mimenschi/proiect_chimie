import React from 'react'
import Header from '../site/Header'
import Footer from '../site/Footer'

function Teorie() {
  return(
    <>

      






      <h2>Mecanismul</h2>
      <p>Protecția catodică cu anozi de sacrificiu reprezintă o metodă electrochimică de prevenire a coroziunii prin care potențialul sistemului metalic este deplasat spre valori negative, inhibând astfel procesele oxidative. Această metodă implică fixarea pe suprafața structurii a unor anozi activi, alcătuiți din metale sau aliaje care posedă un potențial de coroziune mai negativ decât cel al metalului protejat în mediul respectiv.</p>
      
      <h2>Reacții chimice:</h2>
      <div>
        <h3 className='textTeorie'>1. Coroziunea cu depolarizare de hidrogen</h3>
        <div className='textReactii'>
          <strong>În medii acide:</strong>
          <pre>
            Oxidare: Fe → Fe²⁺ + 2e⁻
          </pre>
          <pre>
            Reducere: 2H⁺ + 2e⁻ → H₂
          </pre>
          <pre>
            Reacție globală: Fe + 2H⁺ → Fe²⁺ + H₂
          </pre>

          <strong>În medii neutre si alcaline:</strong>
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
          <strong>În medii acide:</strong>
          <pre>
            Oxidare: Fe → Fe²⁺ + 2e⁻
          </pre>
          <pre>
            Reducere: 2H⁺ + ½O₂ + 2e⁻ → H₂O
          </pre>
          <pre>
            Reacție globală: Fe + 2H⁺ + ½O₂ → Fe²⁺ + H₂O
          </pre>

          <strong>În medii neutre Și alcaline:</strong>
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
        <h2>Aparatura și substanțele necesare</h2>
        <ul>
          <li>Electrozi de fier, cupru, zinc, sau alte metale</li>
          <li>Electrodul de referință</li>
          <li>Voltmetru</li>
          <li>Medii corozive (acid, bază, neutru)</li>
          <li>Hârtie de șmirgel</li>
        </ul>
        <h2>Mod de lucru</h2>
        <ol>
          <li>Se curăţă electrozii cu hârtie de şmirghel înaintea fiecărei măsurători</li>
          <li>Se alcătuiesc următoarele pile galvanice de coroziune:     
          <pre>Fe/mediu coroziv//electrod de referinţă</pre> 
          <pre>Fe+M /mediu coroziv//electrod de referinţă</pre> 
          unde: <b><i>M - Zn, Al, Cu</i></b> sau alt metal iar mediul coroziv: <b><i>NaCl 1%, NaOH 0,1N, H2SO4 0,1N</i></b>
          Pilele galvanice de mai sus se realizează introducând electrodul de Fe şi electrodul de 
          referinţă în vasul conţinând soluţia corozivă.</li>
          <li>Se leagă electrozii pilei electrice la bornele aparatului de măsură, astfel încât t.e.m. să fie pozitivă. </li>
        </ol>
        <h2>Formule și constante utilizate</h2>
         <p>&epsilon;<sub>sis. met.</sub> = &epsilon;<sup>0</sup> - E<sub>exp</sub></p>
        <h2>Interpretarea rezultatelor</h2>
        <p>
          Un metal <b><i>M</i></b> este considerat anod de sacrificiu pentru fier dacă potențialul sistemului asociat <b><i>Fe+M</i></b> este mai negativ decât potențialul fierului singur în acel mediu.
          Dacă potențialul este mai puțin negativ, metalul respectiv nu oferă protecție.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Teorie