import React from 'react'
import Experiment from '../pages/Experiment.jsx'
import Teorie from '../pages/Teorie.jsx'


function Header() {
     return(
        <header>
            <h1>Protecția catodică cu anozi de sacrificiu</h1>
            <nav>
                <ul>
                    <li>Pagina principala</li>
                    <li>Teorie</li>
                    <li>Experiment</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header