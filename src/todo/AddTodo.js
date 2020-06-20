import React, { useState } from "react"
import PropTypes from "prop-types"

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue("")

  function submitHandler(event) {
    event.preventDefault()
    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
      //setValue('')
    }
  }

  return (
    <form  className="col s12" onSubmit={submitHandler}>
      <div className="input-field">
        <input {...input.bind} id="first_name" placeholder="Ввдедите текст своей задачи"/>
        
      </div>
      <button className="btn waves-effect waves-light btn-large" type="submit" name="action" >
          Добавить задачу
          <i className="material-icons right">send</i>
      </button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo
