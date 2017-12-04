import React from 'react';
import CounterStatus from '../CounterStatus/CounterStatus.component';
import Button from '../Button/Button.component';
import './Counter.style.css';

class Counter extends React.Component {
  state = {
    count: 0
  }
  add = () => this.setState({count: this.state.count + 1});
  subtract = () => this.setState({count: this.state.count - 1});
  render () {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <CounterStatus value={this.state.count} />
        </div>
        <div style={{textAlign: 'center', marginTop: '90px'}}>
          <Button type="ADD" onClick={this.add} />
          <Button type="SUBTRACT" onClick={this.subtract} />
        </div>
      </div>
    );
  }
}

export default Counter;
