import React from 'react'
import {Link,useNavigate} from 'react-router'
import {useState} from 'react'
 
import {registerUser} from '../services/user' 
import { toast } from "react-toastify"

function Register() {
  const [name,setName]=useState('')
  const [role,setRole]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
 
  const nameChange=(e)=>{
    setName(e.target.value)
  }
  const roleChange=(e)=>{
    setRole(e.target.value)
  }
  const passwordChange=(e)=>{
    setPassword(e.target.value)
  }
  const emailChange=(e)=>{
    setEmail(e.target.value);
  }
  const navigate=useNavigate()
  const signupHandler= async(e)=>{ 
        
        const data= await registerUser(name,email,password,role);
        // console.log(data.success)
        if (data.status == 'success') {
          console.log('hi')
          toast.success('Registration successful')
          navigate('/')
        } else{
          // console.log(data.error.message)
          toast.error(data.error.message)
        }
    
  }
  
  return (
    <>
      <div className='container   mx-auto p-2' style={{width: "400px"}}>
        
          <div class="row mb-3">
            <div class="col ">
              <label htmlFor="name">Name</label>
              <input type="text" class="form-control" id=' name' onChange={nameChange} placeholder="name" aria-label="First name"/>
            </div> 
          </div>
          <div class="row mb-3">
            <div class="col ">
                <label htmlFor="userRole">userRole</label>
                <input type="text" class="form-control" id='userRole' onChange={roleChange} placeholder="customer or restaurant-owner" aria-label="First name"/>
            </div> 
          </div>
          <div >
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" onChange={emailChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" onChange={passwordChange} id="exampleInputPassword1"/>
          </div> 
          <button type="submit" class="btn btn-primary"  onClick={signupHandler}>Register</button>
          <h6>Already Registered? <Link to="/login">Login</Link></h6>
        
      </div>
    </>
  )
}

export default Register
