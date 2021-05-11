import React from 'react';
import "./App.css";
import TodoList from "./component/TodoList";

const App = () => {
    return (
    <div className='container'>
      <div className='app-wrapper'>
        
      <TodoList  />
    </div>
    </div>
   
  );
}

export default App;
