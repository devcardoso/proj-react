import React,{useState} from 'react';

const TEdit = (props) => {
    const[model,setModel] = useState(props.model)
    
    const action = (e) => {

    }
    return (
        <input
            {...props} />
    );
};

TEdit.defaultProps = {
    className: 'form-control t-edit',
    type: 'text'
}

export default TEdit;