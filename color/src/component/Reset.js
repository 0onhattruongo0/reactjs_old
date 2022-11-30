import React, { Component } from 'react';

class Reset extends Component {
  reSet(){
    this.props.onReset()
  }
  render() {
    return (
        <div>
            <button type="button" onClick={()=>this.reSet()}>Reset</button>
        </div>
    );
  }
}

export default Reset;