import React, { useState } from 'react';
import List from './List';

const Form = () => {
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);

    const handleChange = event => {
        const {name, value} = event.target;
        setTask({...task, [name]: value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(Object.keys(task).length == 0 || task.task.trim() === '') {
            alert('No dejes campo vacío');
            return;
        }

        setTasks([...tasks, task]);
    }

    const deleteTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Task" onChange={handleChange} />
                <button>Save task</button>
            </form>
            <List tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
};

export default Form;
