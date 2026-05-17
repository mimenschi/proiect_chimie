import React from 'react'
import Experiment from '../pages/Experiment.jsx'
import Teorie from '../pages/Teorie.jsx'
import '../pages/TeorieStyle.css'
import CPU from "../assets/CPU.png"
import PB from "../assets/motherboard.png"


function Header() {
     return(
        <header>
            <h1 className="titlu">Scopul lucrării:</h1>
            <p className="textTeorie fade-in-on-load"> Electrodul este un sistem electroneutru format din soluția de electrolit și dintr-un metal. 
            În medii corozive, reacțiile la interfața metalului/soluției sunt ireversibile, 
            generând spontan o diferență de potențial, adică potențialul de coroziune (ε<sub>cor</sub>).
            </p>
            <br />
            <p className="textTeorie fade-in-on-load">
            În această lucrarea experimentală se vor măsura cu un voltmetru
            tensiunile electromotoare (t.e.m.) ale fierului neprotejat şi ale unor metale suprapuse pe rând pe
            fier faţă de electrodul de referinţă Ag/AgCl. Comparând semnele şi valorile potenţialului de
            electrod al fierului şi al fierului legat de metal faţă de electrodul de referinţă, se va pune
            în evidenţă ce metale pot fi utilizate ca anozi de sacrificiu.
            </p>
            <h1 className="titlu">Motivație:</h1>
            <p className="textTeorie fade-in-on-load"> Coroziunea electrică se referă la procesul de deteriorare a dispozitivelor electrice, ca urmare a reacțiilor chimice cu mediul în care se află.
            </p>
            <br />
            <p className="textTeorie fade-in-on-load">
            Acest fenomen reprezintă un factor ridicat de risc într-un sistem de calcul, deoarece poate cauza diferite componente să funcționeze necorespunzător sau să se oprească din funcționare. 
            De asemenea, fenomenul poate reduce sever durata de viață a componentelor afectate. Deși coroziunea poate fi curățată de pe suprafața componentelor, prevenirea acesteia este mult mai benefică,
            deoarece costurile pot ajunge foarte sus pentru aceasta.
            </p>
            <p className="textTeorie fade-in-on-load">
            Fiind studenți la o facultate din domeniul electric suntem profund afectați de acest fenomen în viața de zi cu zi. 
            Simularea acestui fenomen ne poate ajuta să determinăm durata de viață a unui circuit și ce 
            putem face pentru a-l menține funcțional cât mai mult.
            </p>

             <div className="poze">
                 <img className="pozaCPU fade-in-on-load"
                     src={CPU}
                     alt="CPU"

                 />
                 <img className="pozaCPU fade-in-on-load"
                     src={PB}
                     alt="Motherboard"

                 />
             </div>
        </header>
    );
}

export default Header