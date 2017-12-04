import React, {Component} from 'react';
import './Counter.style.css';
import Button from '../Button/Button.component';
import CounterStatus from '../CounterStatus/CounterStatus.component';
class Counter extends Component {
  add = () => {
    this.setState({count: this.state.count + 1});
  }
  subtract = () => {
    this.setState({count: this.state.count - 1});
  }
  state = {
    count: 0
  };
  render () {
    return (
      <div className="Counter">
        <CounterStatus value={this.state.count} />
        <Button onClick={this.add} type={'ADD'} />
        <Button onClick={this.subtract} type={'SUBTRACT'} />
      </div>
    );
  }
}
export default Counter;