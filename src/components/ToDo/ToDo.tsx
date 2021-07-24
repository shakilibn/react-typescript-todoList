import React from 'react';
import './ToDo.css';

interface IProps {
    todo: string,
    handleRemove: (todo: string) => void
}

const ToDo = ({todo = "N/A", handleRemove}:IProps) => {
    return (
        <div className="to-do">
            <strong>To-Do : </strong> {todo}
            <button className="remove-btn" onClick={() => handleRemove(todo)}>Remove</button>
        </div>
    );
};

export default ToDo;