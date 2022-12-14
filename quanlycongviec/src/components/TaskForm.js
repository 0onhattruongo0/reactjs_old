import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name : '',
            status: true
        }
    }
    onCloseForm = () =>{
        this.props.onCloseForm()
    } 
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false
        }
        this.setState ({
            [name] : value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state)
    }
    onCancel = (event)=>{
        event.preventDefault();
        this.setState({
            name: '',
            status: true
        })
    }
    componentDidMount(){
        if(this.props.task!==null){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }
    
//    componentWillReceiveProps(nextProps){
//     if(nextProps && nextProps.task){
//         this.setState({
//             id: nextProps.task.id,
//             name: nextProps.task.name,
//             status: nextProps.status
//         })
//     }else if(!nextProps.task){
//         this.setState({
//             id: '',
//             name: '',
//             status: true
//         })
//     }
//    }

   componentDidUpdate(prevProps, prevState) {
    // console.log('cccc') 
    if(prevProps.task!==this.props.task && this.props.task!==null){ 
        console.log('bbb') 
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
    });
    }else if(prevProps.task!==this.props.task && this.props.task ===null){
        this.setState({
            id: '',
            name: '',
            status: false,
        });
    }
   }
    
   

       
    render() {
        var {id} = this.state
        return (
                <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">{id !== ''? 'C???p Nh???t C??ng Vi???c':'Th??m c??ng vi???c' }<span className='fa fa-times-circle text-right' onClick={this.onCloseForm}></span></h3>
                            
                        </div>
                        <div className="panel-body">
                            <form onSubmit= {this.onSubmit}>
                                <div className="form-group">
                                    <label>T??n :</label>
                                    <input type="text" className="form-control" name ='name' onChange={this.onChange} value={this.state.name}/>
                                </div>
                                <label>Tr???ng Th??i :</label>
                                <select className="form-control" required="required" name ='status' onChange={this.onChange} value={this.state.status}>
                                    <option value={true}>K??ch Ho???t</option>
                                    <option value={false}>???n</option>
                                </select>
                                <br/>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning">{id !== ''? 'S???a':'Th??m' }</button>&nbsp;
                                    <button type="submit" className="btn btn-danger" onClick={this.onCancel}>H???y B???</button>
                                </div>
                            </form>
                        </div>
                    </div>
        );
    }
}

export default TaskForm;