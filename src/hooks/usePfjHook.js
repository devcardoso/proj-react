import {useState} from 'react'

const usePfj = () => {

    const mask = (defValue) => {
        defValue = defValue.replace(/\D/g, "");
        if (defValue.length <= 13) {
            defValue = defValue.replace(/(\d{3})(\d)/, "$1.$2");
            defValue = defValue.replace(/(\d{3})(\d)/, "$1.$2");
            defValue = defValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else {
            defValue = defValue.replace(/^(\d{2})(\d)/, "$1.$2");
            defValue = defValue.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            defValue = defValue.replace(/\.(\d{3})(\d)/, ".$1/$2");
            defValue = defValue.replace(/(\d{4})(\d)/, "$1-$2");
        }
        return defValue;
    }
    const[value,setValue] = useState('')

    const onChange = (event) => {
        setValue(mask(event.target.value))
    }

    return [{value,onChange},setValue]
}

export {usePfj}