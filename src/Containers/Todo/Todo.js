import React ,{useContext} from 'react'
import './todo.css'
import Theme from '../../Contexts/MoodContext';
import {TodoControllers,TodoHeader,TodoInput,TodoList} from "../../Components"


function Todo() {
  const theme =useContext(Theme);
  const classes=["todo",theme.theme]
  return (
    <div className={classes.join(" ")} >
      <TodoHeader/>
      <TodoInput/>
      <div>
        <TodoList/>
        <TodoControllers/>
      </div>
    </div>
  )
}

export default Todo