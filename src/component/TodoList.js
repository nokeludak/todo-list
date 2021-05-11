import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    todos: [
        {
            item: "",
        }
    ],
    input: ""
}

  componentDidMount() {
    let items = [];
    if (localStorage.items) {
      items = JSON.parse(localStorage.items);
    }
    this.setState({
      todos: items,
    });
  }  
  newTodo = (e) => {
    this.setState({
      item: e.target.value,
      input: e.target.value,
    });
  };

 
  addTodo = () => {
    localStorage.items = JSON.stringify([...this.state.todos, this.state]);
    this.setState({ todos: [...this.state.todos, this.state], input: "" });
  };

  deleteTodo = (index) => {
    const copyState = [...this.state.todos];
    copyState.splice(index, 1);
    localStorage.items = JSON.stringify(copyState);
    this.setState({ todos: copyState });
  };
  render() {
    return (
      <div className="header">
        <h1>Todo List</h1>
        
        <input
          type="text"
          placeholder="Enter a Todo..."
          onChange={this.newTodo}
          value={this.state.input}
         className="task-input" /> 
         
        <button className="button-add" onClick={this.addTodo}>Add</button>
        <TodoItem todos={this.state.todos} deletetodo={this.deleteTodo} />
      </div>
    );
  }
}
export default TodoList;


