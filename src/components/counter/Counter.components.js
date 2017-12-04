import React, {Component} from 'react';
import State from '../state/State.components';
import Button from '../button/Button.components';

class Counter extends Component {
    add = () => {
         this.setState({count: this.state.count+1});
    }
    subtract = () => {
         this.setState({count: this.state.count-1});
    }
    state = {
        count: 0
    };

    render () {
        return (
            <div>
                <State value={this.state.count}/> 
                <Button fnName={'ADD'} fn={this.add}/>
                <Button fnName={'SUBTRACT'} fn={this.subtract}/>
            </div>
        );
    }
}

export default Counter;