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
    const [tensiuneReala, setTensiuneReala] = useState(0);
    const [fierElectrod, setFierElectrod] = useState("-");

    //retinerea mesajului si a starii
    const [message, setMessage] = useState("")
    const [simulate, setSimulate] = useState(0)

    //ELECTROD
    const options = [
        { label: "Ag/AgCl", value: "0.266" },
        { label: "Pt/H₂", value: "0 " },
        { label: "Hg/Hg₂Cl₂", value: "0.244 " },
    ];

    
    //aflarea mesajului si a starii corecte
    const handleSimulation = () => {
        let error = "";
        let cor = 0;
        let tensiuneReala = 0;

        setSimulate(0);

        //sistemul metalic
        if (metal == -1.66 && electrod == 0.266 && (volt >= 0.6 && volt <= 0.8))//Al + Ag/AgCl
            tensiuneReala = 1;
        if (metal == -1.66 && electrod == 0.244 && (volt >= 0.55 && volt <= 0.75)) //Al + calomel
            tensiuneReala = 1;
        if (metal == -1.66 && electrod == 0 && (volt >= 0.35 && volt <= 0.55)) //Al + H
            tensiuneReala = 1;

        if ((metal == 0.8 || metal == 0.34 || metal == -0.26 || metal == -0.13 || metal == -0.14) && electrod == 0.266
            && (volt >= 0.35 && volt <= 0.55)) //Ag/Cu/Ni/Pb/Sn  + Ag/AgCl
            tensiuneReala = 1;
        if ((metal == 0.8 || metal == 0.34 || metal == -0.26 || metal == -0.13 || metal == -0.14) && electrod == 0.244
            && (volt >= 0.3 && volt <= 0.5)) //Ag/Cu/Ni/Pb/Sn + calomel
            tensiuneReala = 1;
        if ((metal == 0.8 || metal == 0.34 || metal == -0.26 || metal == -0.13 || metal == -0.14) && electrod == 0
            && (volt >= 0.05 && volt <= 0.25)) //Ag/Cu/Ni/Pb/Sn + H
            tensiuneReala = 1;

        if (metal == -2.37 && electrod == 0.266 && (volt >= 0.15 && volt <= 0.35)) //Mg+ Ag/AgCl
            tensiuneReala = 1;
        if (metal == -2.37 && electrod == 0.244 && (volt >= 0.14 && volt <= 0.34)) //Mg + calomel
            tensiuneReala = 1;
        if (metal == -2.37 && electrod == 0 && (volt >= 0.12 && volt <= 0.32)) //Mg + H
            tensiuneReala = 1;

        if (metal == -2.37 && electrod == 0.266 && (volt >= 2.9 && volt <= 3.1)) //Na+ Ag/AgCl
            tensiuneReala = 1;
        if (metal == -2.37 && electrod == 0.244 && (volt >= 2.75 && volt <= 2.95)) //Na + calomel
            tensiuneReala = 1;
        if (metal == -2.37 && electrod == 0 && (volt >= 2.55 && volt <= 2.75)) //Na + H
            tensiuneReala = 1;

        if (metal == -0.76 && electrod == 0.266 && (volt >= 1.1 && volt <= 1.3)) //Zn + Ag/AgCl
            tensiuneReala = 1;
        if (metal == -0.76 && electrod == 0.244 && (volt >= 0.85 && volt <= 1.05)) //Zn + calomel
            tensiuneReala = 1;
        if (metal == -0.76 && electrod == 0 && (volt >= 0.65 && volt <= 0.85)) //Zn+ H
            tensiuneReala = 1;

        //potentialul de referinta al fierului
        if (electrod == 0.266)
            setFierElectrod(0.45);
        else if (electrod == 0.244)
            setFierElectrod(0.4);
        else setFierElectrod(0.15);

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

        //voltajul are o eroare prea mare
        if (volt != "" && electrod != "-" && metal != -1 && tensiuneReala == 0) {
            error = "⚠️Valoarea tensiunii nu se află în parametri!⚠️"
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
            //tensiunea reala
            //let ten=electrod -metal;
            //setTensiune(ten);
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
                    <label className="numeBara">Selectează electrodul de referință</label>
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
                            <label className="textVoltmetru">Voltmetru(mV)</label>
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
                        src={Experiment}
                        alt="Dynamic content"

                    />

                </div>

                {/*METALE*/}

                <div className="metals">
                    <p className="textMetal">Selectează metalul</p>
                    <ul>
                        <button className={`butonasMetal ${metal === -1.66 ? 'selected' : ''}`} onClick={() => { setMetal(-1.66); setAnod("Da"); }}>Aluminiu</button>
                        <button className={`butonasMetal ${metal === 0.8 ? 'selected' : ''}`} onClick={() => { setMetal(0.8); setAnod("Nu"); }}>Argint</button>
                        <button className={`butonasMetal ${metal === 0.34 ? 'selected' : ''}`} onClick={() => { setMetal(0.34); setAnod("Nu"); }}>Cupru</button>
                        <button className={`butonasMetal ${metal === -2.37 ? 'selected' : ''}`} onClick={() => { setMetal(-2.37); setAnod("Da"); }}>Magneziu</button>
                        <button className={`butonasMetal ${metal === -2.71 ? 'selected' : ''}`} onClick={() => { setMetal(-2.71); setAnod("Da"); }}>Sodiu</button>
                        <button className={`butonasMetal ${metal === -0.25 ? 'selected' : ''}`} onClick={() => { setMetal(-0.25); setAnod("Nu"); }}>Nichel</button>
                        <button className={`butonasMetal ${metal === -0.13 ? 'selected' : ''}`} onClick={() => { setMetal(-0.13); setAnod("Nu"); }}>Plumb</button>
                        <button className={`butonasMetal ${metal === -0.14 ? 'selected' : ''}`} onClick={() => { setMetal(-0.14); setAnod("Nu"); }}>Staniu</button>
                        <button className={`butonasMetal ${metal === -0.76 ? 'selected' : ''}`} onClick={() => { setMetal(-0.76); setAnod("Da"); }}>Zinc</button>
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
                            <th></th>
                            <th>Potențial electrodului (V)</th>
                            <th>Potențialul
                                sistemului metalic (V)</th>
                            <th>Potențial de referință (V)</th>
                            <th>Este anod de sacrificiu?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fe</td>
                            <td>-</td>
                            {/*are prea multe zecimale*/}
                            <td>{simulate == 1 ? -0.44 : "-"}</td>
                            <td>{simulate == 1 ? fierElectrod : "-"}</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Fe + M</td>
                            <td>{simulate == 1 ? electrod : "-"}</td>
                            {/*are prea multe zecimale*/}
                            <td>{simulate == 1 ? metal : "-"}</td>
                            <td>{simulate == 1 ? -0.44 : "-"}</td>
                            <td>{simulate == 1 ? anod : "-"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

export default Components