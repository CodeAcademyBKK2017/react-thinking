import React, {Component} from 'react';
import './Button.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Button extends Component {
	render () {
		const {type, onClick} = this.props;

		let title = "";
		if(type === "ADD") {
			title = "ADD";
		} else if(type === "SUB") {
			title = "SUBTRACT";
		}

		return (
			<button className="Button" onClick={onClick}>
				{title}
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.oneOf(["ADD", "SUB"]).isRequired,
	onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
	type: "ADD",
	onClick: noop
};

export default Button;
