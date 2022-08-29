import React,{useState} from 'react';
import './App.css';
import List from './List';
const Todolist=()=>{
    const [input,setinput]=useState("");
    const [item,setitems]=useState([]);
    
    const itemevent=(event)=>{
  setinput(event.target.value)
    }
    const deleteitems=(id)=>{
      setitems((olditem)=>{
        return olditem.filter((arraelem,index)=>{
          return index!==id;
      })
      
      })
  }
  const check=(e)=>{
  console.log("checked");
   
  
  
    }
    const additems=(event)=>{
      if(!input){
        alert("enter todo first");
      }
      else{
    setitems((olditem)=>{
      return[...olditem,input]
    })
    setinput("");
      };
    }
    return(
      <>
      <div className="maindiv">
        <div className="centerdiv">
         
          <h1>Todo list</h1>
          <input type="text" placeholder='Add items' onChange={itemevent} value={input}/>
          <button onClick={additems}>+</button>
          <ol>
            {/*  */}
            {
              item.map((itemval,index)=>{
                return <List key ={index}
                id={index}
                text={itemval}
                onselect={deleteitems}
                oncheck={check}/>
              })
            }
            </ol>
        </div>
      </div>
      </>
    )
  }
export default Todolist; 