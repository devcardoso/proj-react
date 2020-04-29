import React from 'react';

const TComboBox = React.forwardRef((props,ref)=> (
        <select ref={ref} {...props}>
            {props.options}
        </select>
    ));

TComboBox.defaultProps = {
    className: 'form-control s-tcombobox',
}

export default TComboBox;
