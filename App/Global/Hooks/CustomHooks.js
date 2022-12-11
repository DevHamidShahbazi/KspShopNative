import React, {useState} from 'react';
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
