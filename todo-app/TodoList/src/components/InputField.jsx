import React, { useState } from 'react';

const InputField = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        addTask(task);
        setTask('');
    };

    return (
        <div className="input-container">
            <input
                type="text"
                className="input-field"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
                placeholder="Enter your task"
            />
            <button className="btn" onClick={handleAddTask}>
                Add
            </button>
        </div>
    );
};

export default InputField;