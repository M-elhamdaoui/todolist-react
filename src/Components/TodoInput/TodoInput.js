import React, { useContext } from "react";
import "./todoInput.css";
import iconTodo from "../../Assets/icons/icon-check.svg";
import Theme from "../../Contexts/MoodContext";

function TodoInput() {
  const theme = useContext(Theme);
  const classes = ["todoInput", theme.theme];

  return (
    <form className={classes.join(" ")}>
      <span>
        
        <span className="circle"></span>
      </span>
     
        <input type="text" placeholder="Create new Todo " />
     
    </form>
  );
}

export default TodoInput;
