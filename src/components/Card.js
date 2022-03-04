import React from 'react';

const Card = ({ task, index, deleteTask}) => {
    return (
        <div className="card">
            <div className="container">
                <h3>{task.task}</h3>
                <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;
