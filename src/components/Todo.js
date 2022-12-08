/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';

function Todo({ text, todo, todos, setTodos }) {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((items) => {
            if (items.id === todo.id) {
                return {
                    ...items, completed: !items.completed
                }
            }
            return items;
        }))
    };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}

export default Todo;
