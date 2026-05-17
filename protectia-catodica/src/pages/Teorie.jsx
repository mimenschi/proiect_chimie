import React, { useEffect, useRef } from 'react'
import Header from '../site/Header'
import Footer from '../site/Footer'
import './TeorieStyle.css'

// Hook that attaches IntersectionObserver to a container ref
// and adds/removes the "visible" class on each .scroll-reveal child
function useScrollReveal(containerRef) {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const elements = container.querySelectorAll('.scroll-reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        // Remove so the animation replays when scrolling back up
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.12,       // trigger when 12% of the element is visible
                rootMargin: '0px 0px -40px 0px', // slight bottom offset for a staggered feel
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [containerRef]);
}

function Teorie() {
    const containerRef = useRef(null);
    useScrollReveal(containerRef);

    return (
        <>
            <div ref={containerRef}>
                <h2 className='titlu scroll-reveal'>Mecanismul</h2>
                <div className='scroll-reveal'>
                    <p className="textTeorie">Protecția catodică cu anozi de sacrificiu reprezintă o metodă electrochimică de prevenire a coroziunii prin
                        care potențialul sistemului metalic este deplasat spre valori negative, inhibând astfel procesele oxidative. Această metodă implică
                        fixarea pe suprafața structurii a unor anozi activi, alcătuiți din metale sau aliaje care posedă un potențial de coroziune mai negativ decât cel al
                        metalului protejat în mediul respectiv.
                    </p>
                </div>

                <div className='reactii'>
                    <h2 className='titlu scroll-reveal'>Reacții chimice:</h2>
                    <h3 className='titlureactie scroll-reveal'>1. Coroziunea cu depolarizare de hidrogen</h3>

                    <strong className='scroll-reveal'>În medii acide:</strong>
                    <div className='reactii-bula scroll-reveal'>
                        <div className='textReactii'>
                            <pre>Oxidare: Fe → Fe²⁺ + 2e⁻</pre>
                            <pre>Reducere: 2H⁺ + 2e⁻ → H₂</pre>
                            <pre>Reacție globală: Fe + 2H⁺ → Fe²⁺ + H₂</pre>
                        </div>
                    </div>

                    <strong className='scroll-reveal'>În medii neutre si alcaline:</strong>
                    <div className='reactii-bula scroll-reveal'>
                        <div className='textReactii'>
                            <pre>Oxidare: Fe → Fe²⁺ + 2e⁻</pre>
                            <pre>Reducere: 2H₂O + 2e⁻ → 2OH⁻ + H₂</pre>
                            <pre>Reacție globală: Fe + 2H₂O → Fe²⁺ + 2OH⁻ + H₂</pre>
                        </div>
                    </div>

                    <h3 className='titlureactie scroll-reveal'>2. Coroziunea cu depolarizare de oxigen</h3>
                    <strong className='scroll-reveal'>În medii acide:</strong>
                    <div className='reactii-bula scroll-reveal'>
                        <div className='textReactii'>
                            <pre>Oxidare: Fe → Fe²⁺ + 2e⁻</pre>
                            <pre>Reducere: 2H⁺ + ½O₂ + 2e⁻ → H₂O</pre>
                            <pre>Reacție globală: Fe + 2H⁺ + ½O₂ → Fe²⁺ + H₂O</pre>
                        </div>
                    </div>

                    <strong className='scroll-reveal'>În medii neutre Și alcaline:</strong>
                    <div className='reactii-bula scroll-reveal'>
                        <div className='textReactii'>
                            <pre>Oxidare: Fe → Fe²⁺ + 2e⁻</pre>
                            <pre>Reducere: H₂O + ½O₂ + 2e⁻ → 2OH⁻</pre>
                            <pre>Reacție globală: Fe + H₂O + ½O₂ → Fe(OH)₂</pre>
                        </div>
                    </div>

                    <h2 className='titlu scroll-reveal'>Aparatura și substanțele necesare</h2>
                    <ul>
                        <li className="textTeorie scroll-reveal">Electrozi de fier, cupru, zinc, sau alte metale</li>
                        <li className="textTeorie scroll-reveal">Electrodul de referință</li>
                        <li className="textTeorie scroll-reveal">Voltmetru</li>
                        <li className="textTeorie scroll-reveal">Medii corozive (acid, bază, neutru)</li>
                        <li className="textTeorie scroll-reveal">Hârtie de șmirgel</li>
                    </ul>

                    <h2 className='titlu scroll-reveal'>Mod de lucru</h2>
                    <ol>
                        <li className="textTeorie scroll-reveal">Se curăţă electrozii cu hârtie de şmirghel înaintea fiecărei măsurători</li>
                        <li className="textTeorie scroll-reveal">Se alcătuiesc următoarele pile galvanice de coroziune:
                            <div className='reactii-bula scroll-reveal'>
                                <div className='textReactii'>
                                    <pre>Fe/mediu coroziv//electrod de referinţă</pre>
                                    <pre>Fe+M /mediu coroziv//electrod de referinţă</pre>
                                </div>
                            </div>
                            unde: <b><i>M - Zn, Al, Cu</i></b> sau alt metal iar mediul coroziv: <b><i>NaCl 1%, NaOH 0,1N, H2SO4 0,1N. </i></b>
                            Pilele galvanice de mai sus se realizează introducând electrodul de Fe şi electrodul de
                            referinţă în vasul conţinând soluţia corozivă.
                        </li>
                        <li className="textTeorie scroll-reveal">Se leagă electrozii pilei electrice la bornele aparatului de măsură, astfel încât t.e.m. să fie pozitivă.</li>
                    </ol>

                    <h2 className='titlu scroll-reveal'>Formule necesare experimentului</h2>
                    <p className="textEnumerate scroll-reveal">&epsilon;<sub>sis.met.</sub> = &epsilon;<sub>Fe</sub> + &epsilon;<sub>M</sub></p>
                    <p className="textEnumerate scroll-reveal">E<sub>exp</sub> = &epsilon;<sub>ref</sub> - &epsilon;<sub>sis.met.</sub></p>
                    <p className="textEnumerate scroll-reveal">&epsilon;<sub>sis. met.</sub> = &epsilon;<sup>0</sup> - E<sub>exp</sub></p>

                    <h2 className='titlu scroll-reveal'>Constante utilizate</h2>
                    <div className="table-container scroll-reveal">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sistem</th>
                                    <th>&epsilon;<sup>0</sup></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><th>Fier</th><th>-0.44 V</th></tr>
                                <tr><th>Aluminiu</th><th>-1.66</th></tr>
                                <tr><th>Argint</th><th>0.8</th></tr>
                                <tr><th>Cupru</th><th>0.34 V</th></tr>
                                <tr><th>Magneziu</th><th>-2.37 V</th></tr>
                                <tr><th>Sodiu</th><th>-2.7 V</th></tr>
                                <tr><th>Nichel</th><th>-0.25 V</th></tr>
                                <tr><th>Plumb</th><th>-0.126 V</th></tr>
                                <tr><th>Staniu</th><th>-0.14 V</th></tr>
                                <tr><th>Zinc</th><th>-0.76 V</th></tr>
                                <tr><th>Ag/AgCl</th><th>0.266 V</th></tr>
                                <tr><th>Pt/H₂</th><th>0 V</th></tr>
                                <tr><th>Hg/Hg₂Cl₂</th><th>0.244 V</th></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className='titlu scroll-reveal'>Interpretarea rezultatelor</h2>
                    <p className="textTeorie scroll-reveal">
                        Un metal <b><i>M</i></b> este considerat anod de sacrificiu pentru fier dacă potențialul sistemului asociat <b><i>Fe+M</i></b> este mai negativ decât potențialul fierului singur în acel mediu.
                        Dacă potențialul este mai puțin negativ, metalul respectiv nu oferă protecție.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Teorie;
