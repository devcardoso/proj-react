import React from 'react';

const TEdit = React.forwardRef((props,ref) => (<input ref={props._ref} {...props} />));

TEdit.defaultProps = {
    className: 'form-control edit',
    type: 'text'
}

export default TEdit;