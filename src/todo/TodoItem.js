import React, { useContext } from "react"
import PropTypes from "prop-types"
import Context from "../context"

function TodoItem({ todo, index, onChange }) {
  //console.log('todo', todo)
  
  const okk = function(id, cls) {
    // console.log(cls)
    // cls.push('anim')    
    removeTodo(id)
    //console.log(cls)
  }
  const { removeTodo } = useContext(Context)

  

  let classes = ["todo"]

  if (todo.copmleted) classes.push("completed")

  return (
    <li className={classes.join(" ")}>
      <label>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id,)}
          checked={todo.copmleted}
        />
        <span>{todo.title}</span>
        <i
          className="material-icons red-text waves-effect waves-light"
          onClick={okk.bind(null,todo.id, classes)}
        >
          delete
        </i>
      </label>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem
