import React, { Component } from 'react';
import CountStatus from '../CountStatus/CountStatus.conmponent';
import Button from '../Button/Button.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Counter extends Component {
    render() {
        const {value, add, subtract} = this.props;
        return (
            <div className="App">
                <CountStatus value={value}/>
                <Button func={add} text={'Add'}/>
                <Button func={subtract} text={'Subtract'}/>
            </div>
        );
    }
}
  
Counter.propTypes = {
    add : PropTypes.func.isRequired,
    subtract : PropTypes.func.isRequired
};

Counter.defaultProps = {
    add: noop,
    subtract : noop,
}

export default Counter;