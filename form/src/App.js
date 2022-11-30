import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUsename : '',
      txtPassword: '',
      txtDes: '',
      txtGender: 1,
      textRdLang: 'vi',
      chkbStatus : true
    }
  }
  onHandleChange=(event)=>{
    // var target = event.target;
    var name = event.target.name;
    var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState ({
      [name] : value
    })
  }
  onHandleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div>
          Form
        </div>
        <form onSubmit={this.onHandleSubmit}>
          <div>
            <label>UseName</label>
            <input type='text' name='txtUsename' onChange={this.onHandleChange} value={this.state.txtUsename}/>
          </div>
          <div>
            <label>Passwords</label>
            <input type='password' name='txtPassword' onChange={this.onHandleChange} value={this.state.txtPassword}/>
          </div>
          <div>
            <label>Mô tả:</label>
            <textarea  name='txtDes' onChange={this.onHandleChange} value={this.state.txtDes}></textarea>
          </div>
          <div>
            <label>Giới tính:</label>
            <select name='txtGender' onChange={this.onHandleChange} value={this.state.txtGender}>
              <option value={0}>Nữ</option>
              <option value={1}>Nam</option>
            </select>
          </div>
          <div>
            <label>Ngôn ngữ:</label>
            <div>
              <label >Tiếng Việt:
              <input type="radio" name="textRdLang" value="vi" onChange={this.onHandleChange} checked ={this.state.textRdLang === 'vi'} />
              </label>
              <label>Tiếng Anh:
              <input type='radio' name="textRdLang" value="en" onChange={this.onHandleChange} checked ={this.state.textRdLang === 'en'} />
              </label>
            </div>
          </div>
          <div>
            <label>Trạng Thái:</label>
            <input type='checkbox' name='chkbStatus' value={true} onChange={this.onHandleChange} checked={this.state.chkbStatus === true} />
          </div>
          <div>
            <button type='submit'>Lưu lại</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;