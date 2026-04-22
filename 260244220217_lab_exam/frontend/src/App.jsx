import { useState } from 'react'
import {Routes,Route} from 'react-router'
import {ToastContainer} from 'react-toastify'
import './App.css'
import { useContextApi } from 'react'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Bookings from './components/AddBooking'
import AllBookings from './components/AllBookings'
import AddBooking from './components/AddBooking'
function App() {
  

  return (
    <>
        <Routes>
             <Route path='/user' >
              <Route path='/user/signin' element={<Signin/>}>
                
              </Route>
              <Route path='/user/signup' element={<Register/>} >
                
              </Route>
            </Route>
            <Route path='/user/bookings' element={<Bookings/>}>
                <Route path='/user/bookings/allmybookings' element={<AllBookings/>}>
                </Route>
                <Route path='/user/bookings/addbooking' element={<AddBooking/>}>
                </Route>
            </Route>
        </Routes>
        <ToastContainer/>
    </>
  )
}

export default App
