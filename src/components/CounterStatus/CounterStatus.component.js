import React from 'react';
import PropTypes from 'prop-types';

class CounterStatus extends React.Component {
  render () {
    const {value} = this.props;
    return (
      <input className="Counter-box" type="text" value={value} />
    );
  }
}

CounterStatus.propTypes = {
  value: PropTypes.number.isRequired
};

CounterStatus.defaultProps = {
  value: 0
};

export default CounterStatus;
