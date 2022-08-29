import React, { useState } from 'react';
import './App.css';
const List=(props)=>{
    const[line,setline]=useState('');
    const cutit=()=>{
        
setline(true);
    }
    return(
        <>
        <div className="cross">
        
           
     
           <div className="crosss" 
           onClick={()=>{
            props.onselect(props.id);}}>X</div> 
           <div className='check' onClick={cutit}> ✅</div>
        <li style={{textDecoration:line ? "line-through":"none"}}>{props.text }</li>
        </div>
        </>
    );
};
export default List;