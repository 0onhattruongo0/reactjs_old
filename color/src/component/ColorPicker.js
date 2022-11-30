import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state={
            colors:['green','blue', 'red','#ccc']
        }
    }
    showColor(color){
       return {
        backgroundColor: color
       };
    }
    setActiveColor(color){
        this.props.onRiceiveColor(color);
    }
  render() {
      var elmColor= this.state.colors.map((color,index)=>{
          return <span
            key={index} style={this.showColor(color)} className={this.props.color === color ? 'active':''}
            onClick={()=>this.setActiveColor(color)}
          ></span>
      });
    return (
            <div className='top_left'>
              <div className='top__left-top'>
                Color Picker
              </div>
              <div className='top__left_bot'>
                  {elmColor}
              </div>
            </div>
    );
  }
}

export default ColorPicker;