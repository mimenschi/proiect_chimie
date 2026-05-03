import React from "react"
import Logo from '../assets/logoHM.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        //bg-slate-800 culoare pentru background
        //shadow-lg umbra
        //py si px sunt pixeli pe Ox si Oy
        <nav className="navbar">
            <Link to="/" className="butonasCeva">
                <span className="butonasCeva">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="poza" 
                        />
                    <span className="butonasLogo">Protectia Catodica</span>
                </span>
            </Link>

            <div className="butonasCeva">
                <Link 
                to="/experiment" 
                className="butonas">Experiment
            </Link>

                <Link 
                to="/teorie" 
                className="butonas">Teorie
            </Link>
            </div>
        </nav>
    );
}

export default Navbar 