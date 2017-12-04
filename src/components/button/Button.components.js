import React, { Component } from 'react';

class Button extends Component {
 
    render() {
        // this.props.rowData
        return (
            
                <button onClick={this.props.fn}>{this.props.fnName}</button>
            
        );
  }
}

export default Button;
