/*import React from "react";*/
import React, { useContext } from 'react';


import Components from './Components';

/*import { voltageContext } from "./Voltage";*/


function Formulas() {

    /*const voltage = useContext(voltageContext);*/

    const mediuValori = { acid: 0, neutru: 0.401, bazic: 0.401 };
    const metaleValori = {
        "Fier": -0.44, "Zinc": -0.763,
        "Aluminiu": -1.66, "Magneziu": -2.37, "Siliciu": -0.14, "Nichel": -0.25
    };
    const epsilonPoz = 0.266;
    /*
    const ecor = em + epsilonPoz
    const etaA = ecor - metale[metalPlasat]
    const etaC = ecor - solutii[solutiePlasata]*/

    return (
        <div>
            <div className="buttonSimulate">
                <button onClick={() => handleClick("Simulate")}>
                    Simulează experimentul </button>
            </div>
            <div className="formulas">
                <p>Rezultatele experimentului </p>
            </div>
            <div className="results">
                <table>
                    <thead>
                        <tr>
                            <th>{epsilonPoz}</th>
                            <th>doi</th>
                            <th>trei</th>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
    );
}
export default Formulas