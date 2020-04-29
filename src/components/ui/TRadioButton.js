import React from 'react';

const uniqid = ()=> {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const TRadioButton = React.forwardRef((props, ref) => {
    const _id = props.id ? props.id : uniqid()
    return (
        <div className="container-checkbox">
            <input 
                className="magic-radio" 
                type="radio" id={_id}
                {...props}/>
            <label className="label-checkmark" htmlFor={_id}>{props.text}</label>
        </div>
    );
});

TRadioButton.defaultProps = {
    type: 'radio',
    text: 'meu-label'
}
export default TRadioButton;