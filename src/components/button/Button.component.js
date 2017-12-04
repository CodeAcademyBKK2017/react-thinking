import React, { Component } from 'react';
import './Button.style.css';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Button extends Component {

 render() {
  const {func,funcName} = this.props
   return (
    <button onClick={func}>{funcName}</button>
   );
 }
}

Button.proptTypes = {
    func: ProptTypes.oneOf(['ADD','SUBTRACT']).isRequired,
    funcName: ProptTypes.func.isRequired
  };
  
Button.defaultProps = {
    funcName: '',
    func: noop
};
export default Button;