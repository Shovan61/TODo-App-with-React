import React, { PureComponent } from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

class ToDoList extends React.Component{
constructor(props){
    super(props);
    this.state = {
        tasks: [],
        
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
};

addTask(newTask){
this.setState(curTask => ({
    tasks: [...curTask.tasks, newTask]
}));
};



removeTask(id){
this.setState(curSt => ({
    tasks: curSt.tasks.filter(task => task.id !== id)
}));
};


editTask(id, updatedTask){
    console.log(updatedTask);
const updatedTasks = this.state.tasks.map(curTask => {
    if(curTask.id === id){
        return ({...curTask, task: updatedTask});
    } else {
        return curTask;
    }
});

this.setState({tasks: updatedTasks});

};


render() {

const taskList = this.state.tasks.map(curTask => {
    return (
        <ToDo
        key={curTask.id}
        id={curTask.id}
        taskObj={curTask}
        deleteTask={this.removeTask}
        editTask={this.editTask}
        />
    );
});

return (
    <div className="todolist">
           <h1>ToDo List</h1>
           <ul>
               {taskList}
           </ul>
        
        <NewToDoForm addTask={this.addTask}/>
    </div>
)
};

};


export default ToDoList;