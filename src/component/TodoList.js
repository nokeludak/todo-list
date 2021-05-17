import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList(){
  const [requiredMessage, setMessage] = useState("")
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  

  const save = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
 useEffect(() => {
   if (localStorage.getItem("todos")) {
     setTodos(JSON.parse(localStorage.getItem("todos")));
   }
 }, []);

 const addTodo = () => {
   if (!newTodo)setMessage('*This field is required');{
     const newTodos = [...todos, { todo: newTodo, id: Date.now() }];
     setTodos(newTodos);
     setNewTodo("");
     
    save(newTodos);
    
   }
 };
 const removeTodo = (id) => {
   const newTodos = todos.filter((todo) => todo.id !== id);
   setTodos(newTodos);

   save(newTodos);
 }
    return (
      <div className="header">
        <h1>Todo List</h1>
        <form>
        <input
          type="text"
          id="todo"
          placeholder="Enter a Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="task-input" 
          
          />
          <button style={{ postition: ''}} className="button-add" onClick={addTodo}>Add</button>
      <div className='msg'> {requiredMessage}</div>
        
        <TodoItem todos={todos} removeTodo={removeTodo} />
      </form>
      </div>
    );
  }

export default TodoList;


