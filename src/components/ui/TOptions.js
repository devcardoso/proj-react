import React from 'react';
import PropTypes from 'prop-types';

const TOptions = (props) => {
    return (
        <option value={props.value}>{props.content}</option>
    );
};

TOptions.propTypes = {
    content: PropTypes.string
}

TOptions.defaultProps = {
    content:'texto'
}
export default TOptions;