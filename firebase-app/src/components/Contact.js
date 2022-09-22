import React,{useState} from 'react';
const Contact=()=>{
    const[user,setUser]=useState({
        email:'',
        password:''
    });
    let name,value;
    const getData=(e)=>{
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value})
    }
    const postData=async(e)=>{
  e.preventDefault();
  const {email,password}=user;
  if(email && password){
    const res=await fetch('https://reactfirebase-9add7-default-rtdb.firebaseio.com/reactfirebaseform.json',{
        method:"POST",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify({
        email,
        password
       })
      });
    if(res){
        setUser({email:'',
        password:''
    
        });
    }
    
        alert("data filled seuccefukllyy");
    
     }
     else{
        alert("pls fill the data first")
     }

  }
  
    return(
        <>
        <form method="POST">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={user.email} onChange={getData} name='email' required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={user.password} onChange={getData} name="password" required/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={postData}>Submit</button>
</form>
<div className="data">
    {

    }
</div>
        </>
    )
}
export default Contact;