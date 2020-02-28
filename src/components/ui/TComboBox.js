import React from 'react';

const TComboBox = React.forwardRef((props,ref) =>(
        <select ref={ref} {...props}>
            {props.options.map((opt,idx)=> (
                <option
                    key={opt.key}
                    value={opt.value}>
                  {opt.content}
                </option>
            ))}
        </select>
    ));

TComboBox.defaultProps = {
    className: 'form-control tcombobox',
}

export default TComboBox;
