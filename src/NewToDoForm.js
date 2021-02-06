import React, { PureComponent } from 'react';
import './NewToDoForm.css';
import { v4 as uuid } from 'uuid';

class NewToDoForm extends React.Component{
constructor(props){
    super(props);
    this.state = {task: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

handleChange(e){
this.setState({
    [e.target.name]: e.target.value
})
};

handleSubmit(e){
e.preventDefault();
this.props.addTask({...this.state, id: uuid()})
this.setState({task: ''})
};

render() {
return (
    <form className="form" action="#" onSubmit={this.handleSubmit}>
       {/* input name */}
        <label htmlFor="task">New Task</label>
        <input 
        type="text" 
        name="task" 
        id="task"
        value={this.state.task}
        placeholder="Enter New Task"
        onChange={this.handleChange}
        />
        <button>Add Task</button>
    </form>
        
   
)
};


};

export default NewToDoForm;
