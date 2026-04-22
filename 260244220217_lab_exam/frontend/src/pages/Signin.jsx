import React from 'react'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router'

import axios from 'axios'
function Signin() {
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const signinHandler=async(req,res)=>{
       const body={ email,password };
       console.log(body);
       
       const url='http://localhost:4000/user/signin';
       const response=await axios.post(url,body)
       const data=response.data;
       if(data.status='success'){

          toast.success('user is login')
          console.log(data.data)
          navigate("/user/bookings");
       }else if(data.status='error'){
         toast.error(`{data.error}`)
       }
  }
  return (
   <div className='container'>
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
           
         <button type="submit" class="btn btn-primary" onClick={signinHandler}>Sign In</button>
    </div>
  )
}

export default Signin

