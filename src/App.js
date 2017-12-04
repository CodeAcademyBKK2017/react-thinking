import React, { Component } from 'react';
import './App.css';
import Counter from './Component/Counter/Counter.component';

class App extends Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState({count: this.state.count+1});
  }
  subtract = () => {
    this.setState({count: this.state.count-1});
  }
  render() {
    return (
      <div className="App">
        <Counter value={this.state.count} add={this.add} subtract={this.subtract}/>
      </div>
    );
  }
}

export default App;
