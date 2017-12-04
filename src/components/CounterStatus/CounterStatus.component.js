import React ,{Component} from 'react';
import PropTypes from 'prop-types';
class CounterStatus extends Component {
  render () {
    return (
      <input type="text" value={this.props.value} />
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