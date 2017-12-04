import React, {Component} from 'react';
import './Counter.style.css';
import CountStatus from '../CountStatus/CountStatus.component';
import Button from '../Button/Button.component';

class Counter extends Component {
	constructor (props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	add = () => {
		this.setState({count: this.state.count+1});
	}

	subtract = () => {
		this.setState({count: this.state.count-1});
	}

	render () {
		return (
			<div className="Counter">
				<CountStatus status={this.state.count} />
				<Button title="Add" type="ADD" onClick={this.add} />
				<Button title="Subtract" type="SUB" onClick={this.subtract} />
			</div>
		);
	}
}

export default Counter;
