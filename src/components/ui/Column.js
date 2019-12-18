import React from 'react';
import PropTypes from 'prop-types';


const Column = (props) => {
    let defClass = `col-md-${props.cols}`
    let clazz
    if(props.styleClass)
        clazz = props.styleClass
    else
        clazz = defClass
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