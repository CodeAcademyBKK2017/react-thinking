import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
class Button extends Component {

  render () {

    return (
      <button onClick={this.props.onClick}>{this.props.type}</button>
    );

  }

}
Button.propTypes = {
  'onClick': PropTypes.func.isRequired,
  'type': PropTypes.string.isRequired
};
Button.defaultProps = {
  'onClick': noop,
  'type': ''
};
export default Button;
