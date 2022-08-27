import React,{useState} from 'react';
import validator from 'validator';
const Basicform=()=>{
    const[email,setemail]=useState('');
const[password,setpassword]=useState('');
const[newentry,setentry]=useState([]);
const [emailError, setEmailError] = useState('')
const [passError, setpassError] = useState('')
const setsubmit=(e)=>{
e.preventDefault();


    const allentry={email:email,password:password}
    setentry([...newentry,allentry]);
    
if(email==='' && password==='')
alert('enter details');

}


    return(<>
   <form onSubmit={setsubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required value={email} onChange={(e)=>{
        setemail(e.target.value)
       if(validator.isEmail(email)){
        setEmailError('valid email')
       }else{
        setEmailError("enter valid email");
       }

        
        
    }}/>
    <div className='email-error'>{emailError}</div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required value={password} onChange={(e)=>{
setpassword(e.target.value)
if (validator.isStrongPassword(password,{
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
  })) {
    setpassError('Is Strong Password')
  } else {
    setpassError('Is Not Strong Password')
  }
    }}/>
    <div className='pass-error'>{passError}</div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <div>
    {
      newentry.map((currelem)=>{
        return(
            <div className='result'>
                <p>{currelem.email}</p>
                <p>{currelem.password}</p>
                </div>
        )

      })
    }
  </div>
</form>
    </>)
}
export default Basicform;  