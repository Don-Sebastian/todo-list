/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
// importing components
import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          // eslint-disable-next-line react/no-array-index-key
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
