import React from 'react';

const Todolist=(props)=>{
    
    return(
        <>
        <div className="cross">
        
            
     
           <div className="crosss" 
           onClick={()=>{
            props.onselect(props.id);}}>X</div> 
           
        <li>{props.text }</li>
        </div>
        </>
    );
};
export default Todolist;