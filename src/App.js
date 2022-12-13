/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-typos */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { useState, useEffect } from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // eslint-disable-next-line no-unused-vars
  // States
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // UseEffect
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveToLocal = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  // //get from local
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Don's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
