import React from 'react';
import TodoList from './todo/TodoList';
import './App.css';

function App() {
  const todos = [
    {id: 1, copmleted: false, title: 'Купить хлеб'},
    {id: 2, copmleted: false, title: 'Купить масло'},
    {id: 3, copmleted: false, title: 'Купить молоко'}
  ]

  function toggleTodo(id){
    console.log(id) 
  }

  return (
    <div className="wrapper">
      <h1>Руководство по реакт</h1>
      <TodoList todos = {todos} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
