import React, { Component } from 'react';
import './Counter.css';

import CountStatus from '../CountStatus/CountStatus';
import Button from '../Button/Button';

class Counter extends Component {
    state = {
        count: 0
    };
    Btn_Add=()=>{
        this.setState({count: this.state.count+1});
    }
    Btn_Sub=()=>{
        this.setState({count: this.state.count-1});
    }
    render() {
        return (
            <div className='counter'>
                <div>
                    <CountStatus count={this.state.count} />
                </div>
                <div align='center'>
                    <Button type='add' title='Add' onclick={this.Btn_Add} /> <Button type='subtract' title='Subtract'  onclick={this.Btn_Sub} />
                </div>
            </div>
        );
    }
}

export default Counter;