import React from 'react';

const TodoItem = ({todos, deletetodo}) => {
  return (
    todos.map((todo, index) => {
        let item;
        (index) ? (item =<div className='item' key={index} onClick={() => { deletetodo(index) }}>
            {todo.item}
        </div>) : (item =  <p key={index}></p>)
        return item;
    })
);
}

export default TodoItem;
