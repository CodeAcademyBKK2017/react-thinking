import React, {Component} from 'react';
import './CountStatus.style.css';
import PropTypes from 'prop-types';

class CountStatus extends Component {
	render () {
		const {status} = this.props;

		return (
			<div className="CountStatus">
				{status}
			</div>
		);
	}
}

CountStatus.propTypes = {
	status: PropTypes.number.isRequired
};

CountStatus.defaultProps = {
	status: 0
};

export default CountStatus;
