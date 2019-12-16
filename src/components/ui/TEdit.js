import React,{useState} from 'react';

const TEdit = (props) => {
    const[model,setModel] = useState(props.model)
    
    return (
        <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            {...props} />
    );
};

TEdit.defaultProps = {
    className: 'form-control t-edit',
    type: 'text'
}

export default TEdit;