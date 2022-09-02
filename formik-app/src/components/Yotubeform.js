import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const initialValues={
    email:'',
    password:''
}
const onSubmit=values=>{
    console.log('Form Date',values);
}

const validationSchema=Yup.object({
    email:Yup.string().email('Invalid email format').required('Required'),
    password:Yup.string().min(6).required('Required')
})
const Youtubeform=()=>{
   const formik= useFormik({
    initialValues,
    onSubmit,
    validationSchema
})
  console.log('Form visited',formik.touched); 
    return(
        <>
        <form onSubmit={formik.handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
    
        {formik.touched.email && formik.errors.email ? (<div className='email_error'>{formik.errors.email}</div>):null}
    
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
    {formik.touched.password && formik.errors.password ? (<div className='pass_error'>{formik.errors.password}</div>):null}
  </div>
 
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        
        </>
    )
}
export default Youtubeform;