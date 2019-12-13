import React from 'react';

const Row = (props) => {
    return (
        <div className="form-row">
            {props.children}
        </div>
    );
};
export default Row;