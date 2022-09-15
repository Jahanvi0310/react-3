import React,{ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITask} from './Interfaces'
const App=()=>{
  const[task,setTask]=useState<string>('');
  const[deadline,setdeadline]=useState<number>(0);
  const[todo,setTodo]=useState<ITask[]>([]);
  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
if(event.target.name==='task'){
  setTask(event.target.value)
}
else{
  setdeadline(Number(event.target.value));
}
  }
  const AddTodo=():void=>{
    if(task=='' && deadline==0)
    {
      alert('enter todo first');
    }
    else{
      const newTask={taskName:task,deadline:deadline};
 setTodo([...todo,newTask]);
 setTask('');
 setdeadline(0);
 console.log(todo);
    }
  }
  const completeTask=(toDeletethetask:string):void=>{
setTodo(todo.filter((task)=>{
return task.taskName!=toDeletethetask
}))
  }
  return(
    <div className='App'>
      <h1>my typescript todolist</h1>
<div className="header">
  
  <div className="inputContainer">
    <input type="text" placeholder='enter Todo' name='task'value={task} onChange={handleChange}/>
    <input type="number" placeholder='enter the deadline' value={deadline} onChange={handleChange} name='deadline'/>
    <button className='add-btn' onClick={AddTodo}>Add todo</button>
  </div>
</div>
<div className="todoList">
  {
    todo.map((task:ITask,key:number)=>{
      return<TodoTask key={key} task={task} completeTask={completeTask}/>;
    })
  }
</div>
    </div>
  )
}
export default App;