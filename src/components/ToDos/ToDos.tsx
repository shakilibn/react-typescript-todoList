import React, { useState } from 'react';
import './ToDos.css';
import ToDo from '../ToDo/ToDo';

const Todos = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const handleRemove = (todo : string) => {
        const newTodoList = todoList.filter(td => td !== todo);
        setTodoList(newTodoList);
    }
    console.log(todoList)
    return (
        <div className="to-dos">
            <div>
                <div>
                    <input className="input-text" value={todo} onChange={(e) => setTodo(e.target.value)} name="name" type="text" />
                    
                    <button className="add-btn" onClick={(e) => setTodoList([...todoList, todo])}>Add</button>
                </div>
                {
                    todoList.map(todo => <ToDo key={todo} todo={todo} handleRemove={handleRemove}/>)
                }
            </div>
        </div>
    );
};

export default Todos;