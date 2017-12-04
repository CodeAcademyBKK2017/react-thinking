import React, { Component } from 'react';
import './Counter.css';

import CountStatus from '../CountStatus/CountStatus.component';
import Button from '../Button/Button.component';

class Counter extends Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState({ count: this.state.count + 1 });
    }
    subtract = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className="Counter">
                <CountStatus value={this.state.count} />
                <Button type="add" onClick={this.add} />
                <Button type="subtract" onClick={this.subtract} />
            </div>
        );
    }
}

export default Counter;
