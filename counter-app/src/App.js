import {useState} from 'react';
import './App.css';


const App=()=>{
  const state=useState();
  const[count,setcount]=useState(0)
  
  const IncNum=()=>{
    setcount(count+1)
   
  }
  const UncNum=()=>{
    setcount(count-1);
    
  }
  return(
    <>
    <h1>{count}</h1>
    
    <button onClick={IncNum}>+</button>
    <button onClick={UncNum}>-</button>
    
    </>
  );
};
export default App;