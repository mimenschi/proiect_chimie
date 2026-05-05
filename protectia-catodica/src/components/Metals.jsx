import React, {useContext,createContext,useState} from "react";


export const metalContext = createContext();
function Metals(){
    
    const [metal, setMetal]=useState("haur");

    return(
        <div className="metals">
        <p>Selectează metalul</p>
        <button onClick={() => handleClick("Aluminiu")}>Aluminiu</button>
        <button onClick={() => handleClick("Fier")}>Fier</button>
        <button onClick={() => handleClick("Magneziu")}>Magneziu</button>
        <button onClick={() => handleClick("Nichel")}>Nichel</button>
        <button onClick={() => handleClick("Staniu")}>Staniu</button>
        <button onClick={() => handleClick("Zinc")}>Zinc</button>
        
        <metalContext.Provider value={metal}>
            <Intermediate metal={metal} />
        </metalContext.Provider>
        </div>

        
    );

}
export default Metals