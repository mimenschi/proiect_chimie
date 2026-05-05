import { Select } from "react-dropdown-select"
import React, { useState, useContext, createContext } from "react"

import Formulas from "./Formulas";

export const parametersContext = createContext();

function Components() {

    const [volt, setVolt] = useState(0)
    const [metal, setMetal] = useState("")
    const [mediu, setMediu] = useState("")

    /*MEDIU*/
    const options = [
        { label: "baza", value: "Bazic" },
        { label: "acid", value: "Acid" },
        { label: "neutru", value: "Neutru" },
    ];

    return (
        <div>
            {/*VOLTMETRU*/}

            <div className="counter">
                <form>
                    <label>Voltmetru</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="15"
                        value={volt}
                        onChange={(e) => setVolt(e.target.value)}
                        required
                    />
                </form>
                <p> {volt}</p>
            </div>

            {/*METALE*/}

            <div className="metals">
                <p>Selectează metalul</p>
                <button onClick={() => setMetal("Aluminiu")}>Aluminiu</button>
                <button onClick={() => setMetal("Fier")}>Fier</button>
                <button onClick={() => setMetal("Magneziu")}>Magneziu</button>
                <button onClick={() => setMetal("Nichel")}>Nichel</button>
                <button onClick={() => setMetal("Staniu")}>Staniu</button>
                <button onClick={() => setMetal("Zinc")}>Zinc</button>
                <p>{metal}</p>
            </div>

            {/*MEDIU*/}

            <div className="mediu">
                <Select
                    name="Selectează mediul"
                    options={options}
                    searchable={false}
                    onChange={(values) => setMediu(values[0]?.value)}
                    required
                />
                <p>{mediu}</p>
                {/*<parametersContext.Provider value={mediu}>
                    <Formulas mediu={mediu} />
                </parametersContext.Provider>*/}
                {/*trebuie facut un obiect/vector cu toate variabilele 
                care trebuie transmise si el se va transmite */}
            </div>
        </div>);


}
export default Components