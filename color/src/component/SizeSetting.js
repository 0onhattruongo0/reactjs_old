import React, { Component } from 'react';

class SizeSetting extends Component {
  sizeSetting(value){
    this.props.sizeSetting(value)
  };
  render() {
  
    return (
            <div className='top_right'>
              <div className='top_right-top'>
                Size: {this.props.fontSize} px
              </div>
              <div className='top__right_bot'>
                <button type="button" onClick={() => this.sizeSetting(-2)}>Giảm</button>
                <button type='button' onClick={() => this.sizeSetting(2)}>Tăng</button>
              </div>
            </div>
    );
  }
}

export default SizeSetting;