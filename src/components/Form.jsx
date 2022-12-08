/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-duplicates
import React from "react";
import { useRef } from "react";
// eslint-disable-next-line object-curly-newline
function Form({ todos, setTodos, status, setStatus }) {
//   const [inputText, setInputText] = useState("");
  const todo = useRef();
//   const inputTextHandler = (e) => {
//     setInputText(e.target.value);
//   };
  const submitTodoHandler = (e) => {
      e.preventDefault();
      if (todo.current.value !== '') {
          setTodos([...todos, { text: todo.current.value, completed: false, id: Date.now() }]);
          todo.current.value = "";
      }
    };
    
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

  return (
    <form>
      <input ref={todo} type="text" className="todo-input" autoFocus />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
