import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import noop from 'lodash/noop';
import './Button.css';

class Button extends Component {
    render() {
        const {type, onClick} = this.props;

        return (
            <div className={`btn btn-${type.toLowerCase()}`} onClick={onClick}>{type.toUpperCase()}</div>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    type: '',
    onClick: noop
}

export default Button;
