import React from 'react';
import styled from 'styled-components'

const TextField = (props) => {
    
    return (
        <input {...props} />
    );
};

TextField.defaultProps = {
    className: 'form-control form-control-sm',
    type: 'text'
}


export default TextField;