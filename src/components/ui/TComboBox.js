import React from 'react';

const TComboBox = (props) => {
    return (
        <select {...props}></select>
    );
};

TComboBox.defaultProps = {
    className: 'form-control select',
}

export default TComboBox;
