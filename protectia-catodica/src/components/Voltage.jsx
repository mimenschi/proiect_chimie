import React, { useState, createContext } from 'react';
import Intermediate from './Intermediate';

export const voltageContext = createContext();
function Voltage() {

    const [voltage, setVoltage] = useState("alabala");
    
    return (<div className="counter">
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
        <voltageContext.Provider value={voltage}>
            <Intermediate voltage={voltage} />
        </voltageContext.Provider>

    </div>);
}
export default Voltage