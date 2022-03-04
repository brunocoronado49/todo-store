import React from 'react';
import Card from './Card';

const List = ({ tasks, deleteTask }) => {
    return (
        <div className="list">
            {
                tasks.map((task, index) => (
                    <Card key={index} task={task} index={index} deleteTask={deleteTask} />
                ))
            }
        </div>
    );
};

export default List;
