import React, { Component } from 'react';
import './CountStatus.css';

class CountStatus extends Component {

  render() {
    // const count = this.props.count;
    const {count} = this.props;
      
    return (
      <div className="countstatus">{count}</div>
    );
  }
}

export default CountStatus;