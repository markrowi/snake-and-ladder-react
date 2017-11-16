import React, { Component } from 'react';

import './Avatar.css';

class Avatar extends Component {

  render() {
    
    var [ x, y ] = this.props.position;
    const divStyle = {
      left: x + 'px',
      bottom: y + 'px',
    };
    return (
      <div style={divStyle}  className={"avatar -chicken -" + this.props.direction}>
      </div>
    );
  }
}

export default Avatar;
