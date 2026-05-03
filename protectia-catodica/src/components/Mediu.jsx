import Select from "react-dropdown-select";
function Mediu(){
    const options = [
        { value: "Bazic", label: "baza" },
        { value: "Acid", label: "acid" },
        { value: "Neutru", label: "neutru" }
    ];
    return (<div className="select-mediu">
        <Select 
        name="Selectează mediul"
        options={options}
        >
        
        </Select> 
    </div>);
};
export default Mediu