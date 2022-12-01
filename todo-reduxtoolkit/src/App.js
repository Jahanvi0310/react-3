import React from 'react';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList'
import "./App.css";
const App=()=>{
  return(
    <>
    <div className="app">
			<h1 className="app-title">My Tasks</h1>
    <AddTodo/>
    <TodoList/>
    </div>
    </>
  )
}
export default App;