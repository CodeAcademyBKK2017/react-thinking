import React, { Component } from 'react';
import './Counter.style.css';
import Status from '../status/Status.component'
import Button from '../button/Button.component'

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
    this.changeCount = this.changeCount.bind(this);
  }
    
//  changeCount = plus =>()=>{ // class property
//     let num = this.state.count;
//     plus === true?this.setState({count:num+1}):this.setState({count:num-1});  
//  }

 changeCount (plus) {
   return () => {
    let num = this.state.count;
    plus === true ? this.setState({count:num+1}): this.setState({count:num-1});  
   }
 }

 render() {
   return (
     <div>
       <Status count={this.state.count}/>
       <Button funcName={'ADD'} func={this.changeCount(true)}/>
       <Button funcName={'SUBTRACT'} func={this.changeCount(false)}/>
     </div>
   );
 }
}

export default Counter;