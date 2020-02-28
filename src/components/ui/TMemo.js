import React from 'react';

const TMemo = React.forwardRef((props,ref) => (<textarea ref={ref} {...props} />));

TMemo.defaultProps = {
    className: 'form-control tmemo',
    type: 'text'
}

export default TMemo;