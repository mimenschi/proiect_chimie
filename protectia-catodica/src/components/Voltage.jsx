import React, { useState, createContext } from 'react';


function Voltage() {

    
    return (<div className="counter">
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

    </div>);
}
export default Voltage