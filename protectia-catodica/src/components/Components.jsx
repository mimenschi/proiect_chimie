import { Select } from "react-dropdown-select"
import React, { useState, useContext, createContext } from "react"

import Formulas from "./Formulas";

export const parametersContext = createContext();

function Components() {

    const [volt, setVolt] = useState(0)
    const [metal, setMetal] = useState(0)
    const [mediu, setMediu] = useState("")

    /*MEDIU*/
    const options = [
        { label: "baza", value: "0.401" },
        { label: "acid", value: 0 },
        { label: "neutru", value: "0.401 "},
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
                <button onClick={() => setMetal(-1.66)}>Aluminiu</button>
                <button onClick={() => setMetal(-0.44)}>Fier</button>
                <button onClick={() => setMetal(-2.37)}>Magneziu</button>
                <button onClick={() => setMetal(-0.25)}>Nichel</button>
                <button onClick={() => setMetal(-0.14)}>Staniu</button>
                <button onClick={() => setMetal(-0.763)}>Zinc</button>
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