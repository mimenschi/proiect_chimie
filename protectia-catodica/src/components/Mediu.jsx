import { Select } from "react-dropdown-select"
import React, { useState } from "react"

function Mediu() {

    const options = [
        { label: "baza", value: "Bazic" },
        { label: "acid", value: "Acid" },
        { label: "neutru", value: "Neutru" },
    ];
    return (<div className="mediu">
        <Select
            name="Selectează mediul"
            /*values={selectedValue}*/
            options={options}
            searchable={false}
            required
            /*onChange={handleChange}*/
        />

    </div>);
}
export default Mediu