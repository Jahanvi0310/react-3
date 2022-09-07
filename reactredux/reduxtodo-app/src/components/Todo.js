import React,{useState} from 'react';
import { addTodo } from '../actions/index';
import {useDispatch} from "react-redux";
import './Todo.css';
const Todo=()=>{
    const[inputdata,setinputdata]=useState('');
  const dispatch=useDispatch();
    return (
        <>
        <div className="main-div">
    <div className="child-div">
      <figure>
        
        <figcaption>Add Your List Here ✌</figcaption>
      </figure>
      <div className="addItems">
        <input
          type="text"
          placeholder="✍ Add Item"
          className="form-control"
         value={inputdata}
         onChange={(event)=>setinputdata(event.target.value)
         }
        />
        <i className="fa fa-plus add-btn" ></i>
        
      </div>
      {/* show our items  */}
      <div className="showItems">
        
            <div className="eachItem" >
              <h3>apple</h3>
              <div className="todo-btn">
                
                <i
                  className="far fa-trash-alt add-btn"
                  ></i>
              </div>
            </div>
          
      </div>

      {/* rmeove all button  */}
      <div className="showItems">
        <button
          className="btn effect04"
          data-sm-link-text="Remove All"
          >
          <span> CHECK LIST</span>
        </button>
      </div>
    </div>
  </div>
        </>
    )
}
export default Todo;