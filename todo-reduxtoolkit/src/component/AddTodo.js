import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../reducer/TodoSlice';

const Addtodo = () => {
    const dispatch=useDispatch();
    const [value,setValue]=useState("");
   
    const onSubmit=(e)=>{
e.preventDefault();
if(value.trim().length===0){
    alert("please enter todo bsdk")
    setValue("")
    return
}
dispatch(
    addTask({
        task:value
    })
    
)
setValue("")
    }
  return (
    <div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
            
		</div>
    
  )
}

export default Addtodo;
