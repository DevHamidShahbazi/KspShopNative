import React, {useEffect,useState} from 'react';
import {CheckAuth, CheckUser, CheckVerify} from '../../../Auth/components/FunctionAuth';

export function UseSetFields (init) {
    const [Fields,setFields] = useState(init);
    const handleChange = (value,name) => {
        setFields({
            ...Fields,
            [name]:value
        })
    };
    return {Fields,handleChange}
}
