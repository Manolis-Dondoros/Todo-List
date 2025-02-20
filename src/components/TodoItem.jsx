import React, { useState } from 'react';

const TodoItem = ({ index, todo, toggleTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEdit = () => {
        if (editedText.trim() !== "") {
            editTask(index, editedText);
            setIsEditing(false);
        }
    };

    return (
        <li>
            <div className="todo-container">
                <input
                    type="checkbox"
                    checked={todo.disabled}
                    onChange={() => toggleTask(index)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onBlur={handleEdit}
                        onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
                        className="edit-input"
                        autoFocus
                    />
                ) : (
                    <p
                        className={todo.disabled ? 'disabled' : ''}
                        onClick={() => setIsEditing(true)}
                    >
                        {todo.text}
                    </p>
                )}
            </div>
        </li>
    );
};

export default TodoItem;