import React from "react";
function Metale(onSelectMetal){
    
    const handleMetal = (numeMediu) =>{
        if(onSelectMetal){
            onSelectMetal(numeMetal);
        }
    };
    
    return(
        <div>
        <p>Selectează metalul</p>
        <button onClick={() => handleClick("Aluminiu")}>Aluminiu</button>
        <button onClick={() => handleClick("Fier")}>Fier</button>
        <button onClick={() => handleClick("Magneziu")}>Magneziu</button>
        <button onClick={() => handleClick("Nichel")}>Nichel</button>
        <button onClick={() => handleClick("Staniu")}>Staniu</button>
        <button onClick={() => handleClick("Zinc")}>Zinc</button>
        </div>
    );

}
export default Metale