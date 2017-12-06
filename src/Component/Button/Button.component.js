import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Button extends Component {
  render () {
    return (
      <button onClick={this.props.func}>{this.props.text}</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};

Button.defaultProps = {
  text: '',
  func: noop
};

export default Button;