import React from 'react';

const TEdit = (props) => {
    return (
        <input
            {...props} />
    );
};

TEdit.defaultProps = {
    className: 'form-control edit',
    type: 'text'
}

export default TEdit;