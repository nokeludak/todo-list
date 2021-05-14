import React from "react";

const TodoItem = ({ todos, removeTodo }) => {
  return (
    <div id="item">
      {todos.map((todo) => (
        <div className="color" key={todo.id} onClick={() => removeTodo(todo.id)}>
          <p>{todo.todo}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
