import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Button extends React.Component {
  render () {
    const {onClick, type} = this.props;
    return (
      <button className="Counter-button Counter-button--yellow" onClick={onClick}>{type}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['ADD', 'SUBTRACT']).isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'ADD',
  onClick: noop
};

export default Button;
