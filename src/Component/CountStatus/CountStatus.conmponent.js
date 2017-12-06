import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountStatus extends Component {
  render () {
    return (
      <input type="text" value={this.props.value}/>
    );
  }
}
  
CountStatus.propTypes = {
  value: PropTypes.number.isRequired,
};

CountStatus.defaultProps = {
  value: '',
};

export default CountStatus;