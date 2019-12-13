import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    return (
       <label className="label" {...props}>{props.text}</label>
    );
};

Label.propTypes = {
    text: PropTypes.string
}

Label.defaultProps = {
    text:'texto-rótulo'
}
export default Label;