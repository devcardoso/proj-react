import React from 'react';

const TMemo = React.forwardRef((props,ref) => (<textarea ref={ref} {...props} />));

TMemo.defaultProps = {
    className: 'form-control s-tmemo'
}

export default TMemo;