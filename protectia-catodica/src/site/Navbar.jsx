import React from "react"
import Logo from '../assets/logoHM.png'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom"

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
                <NavLink 
                to="/experiment" 
                className="butonasDom">Experiment
            </NavLink>

                <NavLink 
                to="/teorie" 
                className="butonasDom">Teorie
            </NavLink>
            </div>
        </nav>
    );
}

export default Navbar 