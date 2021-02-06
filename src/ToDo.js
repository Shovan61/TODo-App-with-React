import React, { PureComponent } from 'react';
import './ToDo.css';

class ToDo extends React.Component{
constructor(props){
    super(props);
    this.state = {
        isEdit: false,
        task: this.props.taskObj.task,
        iscrossed: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCrossed = this.handleCrossed.bind(this);
};


handleRemove(){
this.props.deleteTask(this.props.id)
};


handleEdit(){
this.setState({isEdit: !this.state.isEdit})
};

handleChange(e){
this.setState({
 [e.target.name]: e.target.value
});

};

handleUpdate(e){
e.preventDefault();
this.props.editTask(this.props.id, this.state.task);
this.setState({isEdit: !this.state.isEdit});
};


handleCrossed(){
this.setState({iscrossed: !this.state.iscrossed})
};


render() {
    let result;
    if(this.state.isEdit){
        result = (
            <form action="#" onSubmit={this.handleUpdate}>
                <input type="text"
                key={this.props.id}
                name='task'
                id='task'
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Update</button>
            </form>
        );
    } else {
        result = (
            <div className="ToDo">
            <li className={this.state.iscrossed ? "crossed" : ""} onClick={this.handleCrossed}>{this.props.taskObj.task}
            <button onClick={this.handleEdit}><i class="fas fa-pencil-alt"></i></button>
            <button onClick={this.handleRemove}><i class="fas fa-trash"></i></button>
            </li>
            
            </div>  
        )
    } 

    return result;
};
};

export default ToDo;