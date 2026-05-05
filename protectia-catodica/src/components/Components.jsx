import { Select } from "react-dropdown-select"
import React, { useState, useContext, createContext } from "react"

import Formulas from "./Formulas";

export const voltageContext = createContext();
export const metalContext = createContext();
export const mediuContext = createContext();

function Components() {

    const [voltage, setVoltage] = useState("alabalavoltaj");
    const [metal, setMetal] = useState("alabalametal");

    /*MEDIU*/
    const [mediu, setMediu] = useState("alabalamediu");
    const options = [
        { label: "baza", value: "Bazic" },
        { label: "acid", value: "Acid" },
        { label: "neutru", value: "Neutru" },
    ];

    return (
        <div>

            {/*VOLTMETRU*/}

            <div className="counter">
                { /*<p className="count-display">{count}</p>*/}
                <form>
                    <label>Voltmetru</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="15"
                        required
                    />
                </form>
                {/*<voltageContext.Provider value={voltage}>
                    <Formulas voltage={voltage} />
                </voltageContext.Provider>*/}
            </div>

            {/*METALE*/}
            <div className="metals">
                <p>Selectează metalul</p>
                <button onClick={() => handleClick("Aluminiu")}>Aluminiu</button>
                <button onClick={() => handleClick("Fier")}>Fier</button>
                <button onClick={() => handleClick("Magneziu")}>Magneziu</button>
                <button onClick={() => handleClick("Nichel")}>Nichel</button>
                <button onClick={() => handleClick("Staniu")}>Staniu</button>
                <button onClick={() => handleClick("Zinc")}>Zinc</button>

                {/*<metalContext.Provider value={metal}>
                    <Formulas metal={metal} />
                </metalContext.Provider>*/}
            </div>

            {/*MEDIU*/}
            <div className="mediu">
                <Select
                    name="Selectează mediul"
                    /*values={selectedValue}*/
                    options={options}
                    searchable={false}
                    required
                /*onChange={handleChange}*/
                />
                {/*<mediuContext.Provider value={mediu}>
                    <Formulas mediu={mediu} />
                </mediuContext.Provider>*/}
            </div>
        </div>);


}
export default Components