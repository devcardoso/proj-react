import React from 'react';
import PropTypes from 'prop-types';


const Column = (props) => {
    let clazz = `col-md-${props.cols}`
    return (
        <div className={clazz}>
            {props.children}
        </div>
    );
};

Column.propTypes = {
    cols: PropTypes.number
}

Column.defaultProps = {
    cols:1
}

export default Column;