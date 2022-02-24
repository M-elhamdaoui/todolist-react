import React,{useContext} from 'react'
import Theme from '../../Contexts/MoodContext'
import './todoController.css';



function TodoControllers() {
  const theme =useContext(Theme)
  const classes=["todoController",theme.theme]
  return (
    <div className={classes.join(" ")} >
      <div className='length' >5 items left</div>
      <div className='controllers' >
        <p  >All</p>
        <p >Active</p>
        <p  >Completed</p>
      </div>
      <div className='clearing' >
        <p>Clear Completed</p>
      </div>
    </div>
  )
}

export default TodoControllers