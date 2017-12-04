import React, { Component } from 'react';
import Sum from './components/counter/Counter.component'

class App extends Component {
 add = () => {
   this.setState({count: this.state.count+1});
 }
 subtract = () => {
   this.setState({count: this.state.count-1});
 }
 state = {
   count: 0
 };
 render() {
   return (
     <Sum/>
   );
 }
}

export default App;
