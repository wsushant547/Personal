const express=require('express');
const userRouter=express.Router();
const pool=require("../db/pool");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')
const  createResult  = require('../utils/result');

const config=require('../utils/config')

userRouter.post('/signup',async(req,res)=>{
   
    const {name,email,password,role}=req.body;
    console.log(req.body)
    const sql='INSERT INTO user(name,email,password,role) VALUES(?,?,?,?)';

    try{
        const hashpass=await bcrypt.hash(password,10);
        const  data=await pool.execute(sql,[name,email,hashpass,role])
        // console.log(data)
        // console.log(data[0])
        res.send(createResult(data[0],null))
        // console.log(createResult(data[0],null))
 
    }catch(error){
        console.log(error )
        console.log(createResult( null,error))
        res.send(createResult( null,error))
    }
    

})
userRouter.post('/signin',async(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    const sql='SELECT *FROM user WHERE email=?'
    const response=await pool.query(sql,[email])
    // console.log(response)
    const sql_data=response[0][0]
    // console.log(data)
    console.log(sql_data)
    
    // console.log(fetchedPassword)
    if(sql_data){
        const fetchedPassword=sql_data.password;
        const status=await bcrypt.compare(password,fetchedPassword );
        if(status){
            const payload={
                uid:sql_data.user_id,
                role:sql_data.role
            }
            const token=jwt.sign(payload,config.SECREAT);
            const data={
                token,
                name:sql_data.name
            }
            res.send(createResult(data,null))
        }else
            res.send('invalid password')
    }else
        res.send('invalid email')  
       
})
userRouter.get('/',(req,res)=>{
     res.send(req.headers)
})
userRouter.post('/',(req,res)=>{
     
})
module.exports=userRouter;