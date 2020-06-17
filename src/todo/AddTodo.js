import React, {useState} from "react"

function AddTodo(onCreate) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
       event.preventDefault()

       if (value.trim()) {
           onCreate(value)           
       }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value = {value} onChange = {event => setValue(event.target.value)}/>
            <button type="submit">Добавить задачу</button>
        </form>

    )
}

export default AddTodo