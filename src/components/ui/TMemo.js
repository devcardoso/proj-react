import React from 'react';

const TMemo = React.forwardRef((props,ref) => (<textarea ref={ref} {...props} />));

TMemo.defaultProps = {
<<<<<<< HEAD
    className: 'form-control s-tmemo'
=======
    className: 'form-control tmemo',
    type: 'text'
>>>>>>> 48848cf77722051e03b731a17b2fbc6a838388dd
}

export default TMemo;