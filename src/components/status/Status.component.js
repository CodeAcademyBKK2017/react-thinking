import React, { Component } from 'react';
import './Status.style.css';
import ProptTypes from 'prop-types';

class Status extends Component {
 render() {
   const {count} = this.props;
   return (
    <input type="text" value={count} />
   );
 }
}


Status.proptTypes = {
  count: ProptTypes.number.isRequired
};

Status.defaultProps = {
  count: 0
};

export default Status;