import React, {useContext,createContext} from 'react'

import Mediu from './Mediu';
import Metals from './Metals';
import Voltage from './Voltage';

import { voltageContext } from "./Voltage";
import { metalContext } from './Metals';

function Intermediate(){

        const voltage = useContext(voltageContext);
        const metal = useContext(metalContext);
    return(
        <div>
           <p> {voltage}</p>
           <p>{metal}</p>
        </div>

    );
}
export default Intermediate