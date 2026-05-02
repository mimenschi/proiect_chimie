import React from "react"
import Logo from '../assets/logoHM.png'
import Link from 'react-router-dom'

function Navbar() {
    return (
        //bg-slate-800 culoare pentru background
        //shadow-lg umbra
        //py si px sunt pixeli pe Ox si Oy
        <nav className='bg-slate-800 shadow-lg flex items-center justify-around 
        py-3 px-32 fixed top-0 left-0 w-full'>
            <Link to="/">
                <span>
                    <Logo />
                    <span>
                        Protectia Catodica
                    </span>
                </span>
            </Link>

            <div className="flex items-center gap-5 text-black">
                <Link to="/">
                    Protectia Catodica
                </Link>

                <Link to="/Teorie">
                    Teorie
                </Link>

                <Link to="/Experiment">
                    Experiment
                </Link>

            </div>
        </nav>
    )
}

export default Navbar 