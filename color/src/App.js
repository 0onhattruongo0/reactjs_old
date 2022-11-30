import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import Reset from './component/Reset';
import SizeSetting from './component/SizeSetting';
import Result from './component/Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      color: 'red',
      fonsize: 12
    }
    this.onSetColor=this.onSetColor.bind(this)
  }
  onSetColor(color){
    this.setState({
      color:color
    })
  }
  sizeSetting = (value)=>{
    if(this.state.fonsize + value >= 8 && this.state.fonsize <=36){
      this.setState({
        fonsize: this.state.fonsize + value
      });
    }
  }
  onReset=()=>{
    this.setState({
      color: 'red',
      fonsize: 12
    })
  }
  render() {
    return (
        <div className="App">
          <div className='App__top'>
            <ColorPicker color={this.state.color} onRiceiveColor={this.onSetColor} />
            <SizeSetting fontSize={this.state.fonsize} sizeSetting={this.sizeSetting} />
          </div>
          <Reset onReset = {this.onReset} />
          <Result color ={this.state.color} fonsize ={this.state.fonsize} />
        </div>
    );
  }
}

export default App;

