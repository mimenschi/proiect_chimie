import { Select } from "react-dropdown-select"
import React, { useState } from "react"
import Poza from '../assets/placehlder.png'

function Components() {

    //retinerea inputului
    const [volt, setVolt] = useState("")
    const [metal, setMetal] = useState(-1)
    const [mediu, setMediu] = useState("-1")

    //pt formule de calculat
    const [a, setCoroz] = useState(0)

    //retinerea mesajului si a starii
    const [message, setMessage] = useState("")
    const [simulate, setSimulate] = useState(0)

    //MEDIU
    const options = [
        { label: "Bază", value: "0.401" },
        { label: "Acid", value: "0 " },
        { label: "Neutru", value: "0.401 " },
    ];

    //formule
    const epsilonRef = 0.266;


    //aflarea mesajului si a starii corecte
    const handleSimulation = () => {
        let error = "";
        let cor=0;

        setSimulate(0);

        //metalul nu a fost selectat
        if (metal == -1 && volt != "" && mediu != -1) {
            error = "Selectează un metal!"
        }

        //mediul nu a fost selectat
        if (mediu == -1 && metal != -1 && volt != "") {
            error = "Selectează un mediu!"
        }

        //voltajul nu a fost selectat 
        if (volt == "" && mediu != -1 && metal != -1) {
            error = "Selectează voltajul!"
        }

        //doi sau trei parametrii nu au fost selectati 
        if (volt == "" && mediu < 0 || (volt == "" && metal == -1)
            || metal + mediu == -2 ||
            (volt == "" && mediu + metal == -2)) 
                { error = "Selectează toți parametrii!" }

        //toti parametrii au fost selectati
        if (error == "") {
            setSimulate(1)
            setMessage("")

            //formulele aici
            cor= epsilonRef - volt;
            setCoroz(cor)
        }

        //daca nu au fost selectati
        else {
            setMessage(error)
        }
    };

    return (
        <div>
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


            {/*MEDIU SI METALE*/}

            <div className="mediu-metale">

                {/*MEDIU*/}

                <div className="mediu">
                    <Select
                        name="Selectează mediul"
                        options={options}
                        searchable={false}
                        onChange={(values) => setMediu(values[0]?.value)}
                        required
                    />
                </div>


            <div>
                <img className="pozaExp" 
                    src={Poza}
                    alt="Dynamic content"
                    
                />
            </div>

                {/*METALE*/}

                <div className="metals">
                    <p className="textMetal">Selectează metalul</p>
                    <ul>
                        <button className="butonasMetal" onClick={() => setMetal(-1.66)}>Aluminiu</button>
                        <button className="butonasMetal" onClick={() => setMetal(-0.44)}>Fier</button>
                        <button className="butonasMetal" onClick={() => setMetal(-2.37)}>Magneziu</button>
                        <button className="butonasMetal" onClick={() => setMetal(-2.7)}>Sodiu</button>
                        <button className="butonasMetal" onClick={() => setMetal(-0.23)}>Nichel</button>
                        <button className="butonasMetal" onClick={() => setMetal(-0.13)}>Plumb</button>
                        <button className="butonasMetal" onClick={() => setMetal(-0.14)}>Staniu</button>
                        <button className="butonasMetal" onClick={() => setMetal(-0.76)}>Zinc</button>
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
                <table>
                    <thead>
                        <tr>
                            <th>ref</th>
                            <th>egasit</th>
                            <th>ceva</th>
                        </tr>
                        <tr>
                            <td>{epsilonRef}</td>
                            {/*are prea multe zecimale*/}
                            <td>{simulate == 1 ? a : "0"}</td>
                            <td>ceva</td>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>);
}

export default Components