// 

// const App=()=>{
//   const [name,setname]=useState('');
//   const [fullname,setfullname]=useState();
//  const [lastname,setlastname]=useState();
//  const[lastnamenew,setlastnamenew]=useState('');
//   const addinput=(event)=>{
    
//     setname(event.target.value)
//   }
//   const addinputtwo=(event)=>{
    
//     setlastname(event.target.value)
   
//   }
//   const onsubmit=(event)=>{
//     event.preventDefault();
//     setfullname(name);
//     setlastnamenew(lastname);
//   }

//   return(
//     <>
//     <form onClick={onsubmit}>
//     <div className='main-div'>
//     <div className="center-div">

//     <input className='input-box' type="text" placeholder='enter your name'  onChange={addinput} value={name}/> 
    
//     <button className="btn"type="submit">click me</button>
//     <input className="input-box2" type="text" placeholder='enter your last name'  onChange={addinputtwo} value={lastname} />
//     <h1>Hello {fullname} {lastnamenew} </h1>
//     </div>
//     </div>
//     </form>
//     </>
//   )
// }
// export default App;

import React,{useState} from 'react';

const App=()=>{
  const [email,setemail]=useState('');
  const[emailad,setemailad]=useState();
  const [pass,setpass]=useState();
  const [passad,setpassad]=useState('');

const addinput=(event)=>{
setemail(event.target.value);
// if(validator.isEmail(emailid)){
//   setemail('valid email');
// }else{
//   setemail('enter valid email');
// }
}
const addinputtwo=(event)=>{
setpass(event.target.value);
}
const onsubmit=(event)=>{
event.preventDefault();

  setemailad(email);
  setpassad(pass);

}
  return(
    <>
   <form onClick={onsubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={addinput} value={email}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={addinputtwo} value={pass}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <div className="output">
    <h1> {emailad}</h1>
    <p> {passad}</p>
  </div>
</form>
    </>
  )
}
export default App;