import React, {useState} from 'react'

const useInput = ({defValue = '',upperCase = false}) => {
    
    const[value,setValue] = useState(defValue)

    const onChange = (event) => {
        if(upperCase)
            setValue(event.target.value.toUpperCase())
        else
            setValue(event.target.value)
    }

    return {value,onChange}
}

export {useInput}
