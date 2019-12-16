import React from 'react';

const FormRow = (props) => {
    return (
        <div className="form-row">
            {props.children}
        </div>
    );
};
export default FormRow;