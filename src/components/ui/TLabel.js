import React from 'react';
import PropTypes from 'prop-types';

const TLabel = (props) => {
    return (<label className="s-tlabel" {...props}>{props.text}</label>);
};

TLabel.propTypes = {
    label: PropTypes.string
}

TLabel.defaultProps = {
    text:'texto-rótulo'
}
export default TLabel;