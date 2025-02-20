import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todo');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const addTask = (task) => {
        if (task.trim() !== "") {
            const newTodos = [...todos, { text: task, disabled: false }];
            setTodos(newTodos);
        }
    };

    const deleteAllTasks = () => {
        setTodos([]);
    };

    const toggleTask = (index) => {
        const newTodos = [...todos];
        newTodos[index].disabled = !newTodos[index].disabled;
        setTodos(newTodos);
    };

    const editTask = (index, newText) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
    };

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="card">
            <h2>ToDo List</h2>
            <InputField addTask={addTask} />
            <ul className="scroll">
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        toggleTask={toggleTask}
                        editTask={editTask}
                    />
                ))}
            </ul>
            <hr className="counter" />
            <div className="counter-container">
                <p><span>{todos.length}</span> Items Total</p>
                <button onClick={deleteAllTasks}>Delete All</button>
            </div>
        </div>
    );
};

export default TodoList;