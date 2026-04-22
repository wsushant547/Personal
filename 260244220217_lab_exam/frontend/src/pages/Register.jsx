import React from 'react'
import {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
function Register() {
  const[full_name,setFull_name]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirm_password,setConfirm_password]=useState('')
  
  const registerHandler=async()=>{
        const body={full_name,email,password,confirm_password};
        console.log(body);
      if(body.password!=confirm_password){
        toast.error(`password doesn't match`)
      }
      const url='http://localhost:4000/user/signup';
      const response=await axios.post(url,body)
      const data=response.data;
      if(data.status='success'){
         toast.success('registration is completed')
      }else if(data.status='error'){
        toast.error(`{data.error}`)
      }
  }
  return (
    <div className='container'>
       <div class="mb-3">
          <label for="full_name" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="exampleInputFull_name" aria-describedby="full_nameHelp"
               onChange={(e)=>{
                setFull_name(e.target.value);
               }}
          />
          <div id="full_nameHelp" class="form-text"> </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             onChange={(e)=>{
              setEmail(e.target.value)
             }}
          
          />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
                 onChange={(e)=>{
                  setPassword(e.target.value)
                 }}
          
          />
        </div>
        <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1"
                    onChange={(e)=>{
                      setConfirm_password(e.target.value)
                     }}
             
             />
        </div>
        <button type="submit" class="btn btn-primary" onClick={registerHandler}>Register</button>
    </div>
  )
}

export default Register;
  