import React from 'react';

const TEdit = React.forwardRef((props,ref) => (<input ref={ref} {...props} />));

TEdit.defaultProps = {
    className: 'form-control s-tedit',
    type: 'text'
}

export default TEdit;