import React from 'react'
import {Link} from 'react-router'
import {useState} from 'react'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const loginHandler=()=>{
    const body={email,password};
    const url='http://localhost:5400/user/signin'
  }
  return (
    <div className='container   mx-auto p-2' style={{width: "400px"}}>
        
          <div >
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" onChange={(e)=>{
               setEmail(e.target.value);
            }} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1"  class="form-label">Password</label>
            <input type="password" class="form-control" onChange={(e)=>{
              setPassword(e.target.value);
            }} id="exampleInputPassword1"/>
          </div>
          
          <button type="submit" onClick={loginHandler} class="btn btn-primary">Sign in</button>
          <h6>New user?    <Link to="/register">Register</Link></h6>
       
    </div>
  )
}

export default Login
