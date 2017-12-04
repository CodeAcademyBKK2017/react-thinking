import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './Button.css';

class Button extends Component {
render () {
    const {onclick,type} = this.props;
    return (
        <div className={`btn btn-${type}`} onClick={onclick}>{this.props.title}</div>
    );
}
}

Button.propTypes = {
    type: PropTypes.oneOf(['add','subtract']).isRequired,
    onclick: PropTypes.func.isRequired
};

Button.defaultProps = {
    onclick: noop
};
export default Button;