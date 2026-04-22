import { useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {Link,Route,Routes} from 'react-router'
import { ToastContainer } from 'react-toastify'
function App() {
  

  return (
    <>
       {/*<Register/>*/}
       {/*<Login/>*/}
       {/*<Home/>*/}
       {/*
       <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
       </ul>*/}
       <Routes>
         <Route path='/home' element={<Home/>} >

         </Route>
         <Route path='/register' element={<Register/>}>
          
         </Route>
         <Route path='/login' element={<Login/>}>
          
         </Route>
         <Route path='/*' element={<Login/>}>
          
         </Route>
       </Routes>
       <ToastContainer />
    </>
  )
}

export default App
