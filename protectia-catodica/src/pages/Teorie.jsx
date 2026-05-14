import React from 'react'
import Header from '../site/Header'
import Footer from '../site/Footer'
import './TeorieStyle.css'

function Teorie() {
  return (
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

        <h2>Formule necesare experimentului</h2>
        <p>&epsilon;<sub>sis.met.</sub> = &epsilon;<sub>Fe</sub> + &epsilon;<sub>M</sub></p>
        <p>E<sub>exp</sub> = &epsilon;<sub>ref</sub> - &epsilon;<sub>sis.met.</sub></p>
        <p>&epsilon;<sub>sis. met.</sub> = &epsilon;<sup>0</sup> - E<sub>exp</sub></p>

        <h2>Constante utilizate</h2>
        <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Sistem</th>
              <th>&epsilon;<sup>0</sup></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Fier</th>
              <th>-0.44 V</th>
            </tr>

            <tr>
              <th>Aluminiu</th>
              <th>-1.66</th>
            </tr>

            <tr>
              <th>Argint</th>
              <th>0.8</th>
            </tr>

            <tr>
              <th>Cupru</th>
              <th>0.34 V</th>
            </tr>

            <tr>
              <th>Magneziu</th>
              <th>-2.37 V</th>
            </tr>

            <tr>
              <th>Sodiu</th>
              <th>-2.7 V</th>
            </tr>

            <tr>
              <th>Nichel</th>
              <th>-0.25 V</th>
            </tr>

            <tr>
              <th>Plumb</th>
              <th>-0.126 V</th>
            </tr>

            <tr>
              <th>Staniu</th>
              <th>-0.14 V</th>
            </tr>

            <tr>
              <th>Zinc</th>
              <th>-0.76 V</th>
            </tr>

            <tr>
              <th>Ag/AgCl</th>
              <th>0.266 V</th>
            </tr>

            <tr>
              <th>Pt/H₂</th>
              <th>0 V</th>
            </tr>

            <tr>
              <th>Hg/Hg₂Cl₂</th>
              <th>0.244 V</th>
            </tr>
          </tbody>
        </table>
        </div>

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