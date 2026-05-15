import React from 'react'
import Experiment from '../pages/Experiment.jsx'
import Teorie from '../pages/Teorie.jsx'


function Header() {
     return(
        <header>
            <h1 className="titlu">Scopul lucrării:</h1>
            <p className='textTeorie'> Electrodul este un sistem electroneutru format dintr-un metal și soluția de electrolit. 
            În medii corozive, reacțiile la interfața metal/soluție sunt ireversibile, 
            generând spontan o diferență de potențial, adică potențialul de coroziune (εcor).
            </p>
            <br />
            <p className='textTeorie'>
            În această lucrarea experimentală se vor măsura cu un voltmetru
            tensiunile electromotoare (t.e.m.) ale fierului neprotejat şi ale Zn, Al, Cu suprapuse pe rând pe
            fier faţă de electrodul de referinţă Ag/AgCl. Comparând semnele şi valorile potenţialului de
            electrod al fierului şi al fierului legat cu Zn, Al şi Cu faţă de electrodul de referinţă se va pune
            în evidenţă ce metale pot fi utilizate ca anozi de sacrificiu.
            </p>
            <h1 className="titlu">Motivație:</h1>
            <p className='textTeorie'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p className='textTeorie'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </header>
    );
}

export default Header