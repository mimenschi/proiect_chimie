import { Select } from "react-dropdown-select"
import React, { useState } from "react"


function Mediu() {
    const [selectedValue, setSelectedValue] = useState([]);
    const options = [
        { label: "baza", value: "Bazic" },
        { label: "acid", value: "Acid" },
        { label: "neutru", value: "Neutru" },
    ];
    return (<div className="mediu">
        <Select
            name="Selectează mediul"
            values={selectedValue}
            options={options}
            onChange={(values) => setSelectedValue(values)}
        />

    </div>);
}
export default Mediu