import React from 'react';

const TComboBox = React.forwardRef((props,ref)=> (
        <select ref={ref} {...props}>
            {props.options}
        </select>
    ));

TComboBox.defaultProps = {
    className: 'form-control tcombobox',
}

export default TComboBox;
