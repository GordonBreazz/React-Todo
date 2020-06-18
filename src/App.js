import React, { useState } from 'react';
import TodoList from './todo/TodoList';
import AddTodo from './todo/AddTodo';
import './App.css';
import Context from './context'

function App() {
  const [todos, setTodos] = React.useState(
    [
      {id: 1, copmleted: false, title: 'Купить хлеб'},
      {id: 2, copmleted: true, title: 'Купить масло'},
      {id: 3, copmleted: false, title: 'Купить молоко'}
    ]    
  )

  function toggleTodo(id){
    setTodos(todos.map( todo => {
      if (todo.id === id) todo.copmleted = !todo.copmleted
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {    
    setTodos(todos.concat([{
      title,
      id: Date.now,
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">    
      <h1>Руководство по реакт</h1>
      <AddTodo onCreate={addTodo}/>
      { todos.length ? (<TodoList todos = {todos} onToggle={toggleTodo}/>) : (<p>Нет задач</p>) } 
    </div>
    </Context.Provider>
  )
}

export default App;
