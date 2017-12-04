import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import './CountStatus.css';

class CountStatus extends Component {
    render() {
        return (
            <input className="CountStatus" type="text" value={this.props.value} />
        );
    }
}

CountStatus.propTypes = {
    value: PropTypes.number.isRequired,
}

CountStatus.defaultProps = {
    value: 0,
}

export default CountStatus;
