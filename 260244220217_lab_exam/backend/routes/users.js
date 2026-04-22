const express=require('express');
const pool=require('../db/pool')
const  result=require('../utils/result')
const userRouter=express.Router();

userRouter.post('/signup',async(req,res)=>{
   const {full_name,email,password}=req.body;
   const sql='INSERT INTO users(full_name,email,password) VALUES(?,?,? )'
   try {
    const response=await pool.query(sql,[full_name,email,password]);
    res.send(result.createResult(response[0],null))
   } catch (error) {
    res.send(result.createResult(null,error))
   }

})
userRouter.post('/signin',async(req,res)=>{
     
    const { email,password}=req.body;
    const sql='SELECT *FROM users  WHERE email=?'
    try {
       const response=await pool.query(sql,[email]);
       console.log(response)
       const data=response[0][0]
       if(data){
        //   res.send(result.createResult(data))
       }else{//data is undefined
          res.send(result.createResult(null,'Invalid email'))
       }
       if(data.password==password){
         //  res.send('user is authenticated')
         res.send(result.createResult(data))
       }else{
          res.send(result.createResult(null,"user is not authenticated:Invalid password"))
       }
    } catch (error) {
        console.log(error)
    }
 
})

 
userRouter.post('/booking',async(req,res)=>{
     
    const {user_id,title,booking_date,booking_time,location,price,notes}=req.body;
    const sql='INSERT INTO bookings(user_id,title,booking_date,booking_time,location,price,notes) VALUES(?,?,?,?,?,?,? )'
    try {
     const response=await pool.query(sql,[user_id,title,booking_date,booking_time,location,price,notes]);
     res.send(result.createResult(response[0],null))
    } catch (error) {
     res.send(result.createResult(null,error))
    }
    console.log(req.body);
})
userRouter.get('/booking',async(req,res)=>{
     
    const {user_id}=req.body;
    const sql='SELECT *FROM bookings WHERE user_id=?'
    try {
     const response=await pool.query(sql,[user_id]);
     res.send(result.createResult(response[0],null))
    } catch (error) {
     res.send(result.createResult(null,error))
    }
    console.log(req.body);
})
module.exports=userRouter;