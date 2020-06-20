import React, { useContext } from "react"
import PropTypes from "prop-types"
import Context from "../context"

function TodoItem({ todo, index, onChange }) {
  //console.log('todo', todo)
  const { removeTodo } = useContext(Context)
  let classes = ["todo"]

  if (todo.copmleted) classes.push("completed")

  return (
    <li className={classes.join(" ")}>
      <label>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.copmleted}
        />
        <span>{todo.title}</span>
        <i
          className="material-icons red-text waves-effect waves-light"
          onClick={removeTodo.bind(null, todo.id)}
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
