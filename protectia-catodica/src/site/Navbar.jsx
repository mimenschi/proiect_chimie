import React from "react"
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom"

function Navbar() {
    
    return (
        <nav className="navbar">
            <Link to="/" className="butonasCeva">
                <span className="butonasCeva">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="poza" 
                        />
                    <span className="butonasLogo">Protecția Catodică</span>
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
                <NavLink
                to="/quiz"
                className="butonasDom">Quiz
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar 