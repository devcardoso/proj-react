import React from 'react';
import PropTypes from 'prop-types';

const TLabel = (props) => {
<<<<<<< HEAD
    return (<label className="s-tlabel" {...props}>{props.text}</label>);
=======
    return (
       <label className="tlabel" {...props}>{props.text}</label>
    );
>>>>>>> 48848cf77722051e03b731a17b2fbc6a838388dd
};

TLabel.propTypes = {
    label: PropTypes.string
}

TLabel.defaultProps = {
    text:'texto-rótulo'
}
export default TLabel;