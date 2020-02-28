import React from 'react';
import PropTypes from 'prop-types';

const TLabel = (props) => {
    return (
       <label className="tlabel" {...props}>{props.text}</label>
    );
};

TLabel.propTypes = {
    text: PropTypes.string
}

TLabel.defaultProps = {
    text:'texto-rótulo'
}
export default TLabel;