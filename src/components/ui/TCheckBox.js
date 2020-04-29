import React from 'react';

const TCheckBox = React.forwardRef((props,ref) => {
    const _id = props.id || props.name
    return (
       <div className="container-checkbox">
           <input className="magic-checkbox" id={_id} {...props}/>
           <label className="text-checkmark" htmlFor={_id}>{props.text}</label>
       </div>
    );
});

TCheckBox.defaultProps = {
    type:'checkbox',
    text:'meu-label'
}
export default TCheckBox;
