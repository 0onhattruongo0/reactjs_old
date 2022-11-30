import React, { Component } from 'react';

class Result extends Component {
    setStyle= ()=>{
        return {
            color: this.props.color,
            fontSize: this.props.fonsize,
        }
    }
  render() {
    return (
          <div className='App__bot'>
            <p>color: red - fonsize:{this.props.fonsize}px</p>
            <div className='App_bot-ct' style={this.setStyle()}>
              Nội dung setting
            </div>
          </div>
    );
  }
}

export default Result;