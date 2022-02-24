import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './todoList.css'

function TodoList() {
  return (
    <div className='todoList'>
      <TodoItem content="Jog around the park " isCompleted={true}   />
      <TodoItem content="Jog around the park " isCompleted={false}   />
      <TodoItem content="Jog around the park " isCompleted={false}   />
      <TodoItem content="Jog around the park " isCompleted={false}   />
    </div>
  )
}

export default TodoList