import React, { useState } from "react"
function Voltage() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    return (<div className="counter">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>down</button>
        <button className="counter-button" onClick={increment}>up</button>

    </div>);
}
export default Voltage