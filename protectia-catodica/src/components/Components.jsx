import { Select } from "react-dropdown-select"
import React, { useState } from "react"
import Poza from '../assets/placehlder.png'
import Experiment from '../assets/Experiment.png'
import Experimentbg from '../assets/Experimentbg.png'

function Components() {

    //retinerea inputului
    const [volt, setVolt] = useState("")
    const [metal, setMetal] = useState(-1)
    const [electrod, setElectrod] = useState("-")

    //pt formule de calculat
    const [a, setCoroz] = useState(0)
    const [anod, setAnod] = useState("-")
    const [tensiune, setTensiune] = useState(0);

    //retinerea mesajului si a starii
    const [message, setMessage] = useState("")
    const [simulate, setSimulate] = useState(0)

    //ELECTROD
    const options = [
        { label: "Ag/AgCl", value: "0.266" },
        { label: "Pt/H₂", value: "0 " },
        { label: "Hg/Hg₂Cl₂", value: "0.244 " },
    ];

    //formule
    const epsilonRef = 0.266;


    //aflarea mesajului si a starii corecte
    const handleSimulation = () => {
        let error = "";
        let cor = 0;

        setSimulate(0);

        //metalul nu a fost selectat
        if (metal == -1 && volt != "" && electrod != "-") {
            error = "⚠️Selectează un metal!⚠️"
        }

        //electrodul nu a fost selectat
        if (electrod == "-" && metal != -1 && volt != "") {
            error = "⚠️Selectează un electrod!⚠️"
        }

        //voltajul nu a fost selectat 
        if (volt == "" && electrod != "-" && metal != -1) {
            error = "⚠️Selectează voltajul!⚠️"
        }

        //doi sau trei parametrii nu au fost selectati 
        if (volt == "" && electrod == "-" || (volt == "" && metal == -1)
            || metal == -1 && electrod == "-" ||
            (volt == "" && metal == -1 && electrod == "-")) { error = "⚠️Selectează toți parametrii!⚠️" }

        //toti parametrii au fost selectati
        if (error == "") {
            setSimulate(1)
            setMessage("")

            //formulele 
            //sistemul metalic
            if (metal > -0.44)
                metal = -0.44;

            //tensiunea reala
            let ten=electrod -metal;
            setTensiune(ten);

            cor = electrod - volt;
            setCoroz(cor)
        }

        //daca nu au fost selectati
        else {
            setMessage(error)
        }
    };

    return (
        <div>


            {/*ELECTROD SI METALE*/}

            <div className="mediu-metale">

                {/*ELECTROD*/}

                <div className="mediu">
                    <label className="numeBara">Selectează electrodul</label>
                    <Select
                        name="Selectează electrodul"
                        options={options}
                        searchable={false}
                        onChange={(values) => setElectrod(values[0]?.value)}
                        required
                    />
                </div>

                <div className="containerVolt">
                    {/*VOLTMETRU*/}

                    <div className="voltmetru">
                        <form>
                            <label className="textVoltmetru">Voltmetru</label>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                max="15"
                                value={volt}
                                onChange={(e) => setVolt(e.target.value)}
                            />
                        </form>
                    </div>

                    <img className="pozaExp"
                        src={Experimentbg}
                        alt="Dynamic content"

                    />

                </div>

                {/*METALE*/}

                <div className="metals">
                    <p className="textMetal">Selectează metalul</p>
                    <ul>
                        <button className="butonasMetal" onClick={() => { setMetal(-1.66), setAnod("Da") }}>Aluminiu</button>
                        <button className="butonasMetal" onClick={() => { setMetal(0.8), setAnod("Nu") }}>Argint</button>
                        <button className="butonasMetal" onClick={() => { setMetal(0.34), setAnod("Nu") }}>Cupru</button>
                        <button className="butonasMetal" onClick={() => { setMetal(-2.37), setAnod("Da") }}>Magneziu</button>
                        <button className="butonasMetal" onClick={() => { setMetal(-2.71), setAnod("Da") }}>Sodiu</button>
                        <button className="butonasMetal" onClick={() => { setMetal(-0.25), setAnod("Nu") }}>Nichel</button>
                        <button className="butonasMetal" onClick={() => { setMetal(-0.13), setAnod("Nu") }}>Plumb</button>
                        <button className="butonasMetal" onClick={() => { setMetal(-0.14), setAnod("Nu") }}>Staniu</button>
                        <button className="butonasMetal" onClick={() => { setMetal(-0.76), setAnod("Da") }}>Zinc</button>
                    </ul>
                </div>


            </div>

            {/*SIMULARE*/}

            <div className="buttonSimulate">
                <button className="simulare" onClick={handleSimulation}>
                    Simulează experimentul </button>
                {message && <p>{message}</p>}
            </div>

            {/*REZULTATE */}
            <div className="results">
                <h3>Rezultate</h3>
                <table className="results">
                    <thead>
                        <tr>
                            <th>Potențial mediului</th>
                            <th>Potențialul
                                sistemului metalic</th>
                            <th>Potențial de referință</th>
                            <th>Este anod de sacrificiu?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{electrod}</td>
                            {/*are prea multe zecimale*/}
                            <td>{simulate == 1 ? a : "0"}</td>
                            <td>Ala al fierului gol</td>
                            <td>{anod}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

export default Components