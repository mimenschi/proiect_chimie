import React from "react"
import Logo from '../assets/logoHM.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        //bg-slate-800 culoare pentru background
        //shadow-lg umbra
        //py si px sunt pixeli pe Ox si Oy
        <nav className="navbar">
            <Link to="/">
                <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="poza" 
                        />
                    <span className="text-xl tracking-wide">Protectia Catodica</span>
                </span>
            </Link>

            <div className="flex items-center gap-5 text-white">
                <Link 
                to="/experiment" 
                className="text-base font-medium hover:text-sky-300 transition-colors duration-200">Experiment
            </Link>

                <Link 
                to="/teorie" 
                className="text-base font-medium hover:text-sky-300 transition-colors duration-200">Teorie
            </Link>
            </div>
        </nav>
    );
}

export default Navbar 