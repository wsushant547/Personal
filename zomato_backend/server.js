const express =require('express')
const userRouter=require('./routes/user')
const cors = require('cors')
const authUser=require('./utils/auth') 
const app=express();
app.use(express.json());
app.use(cors())
app.use(authUser)
app.use('/user',userRouter);
// app.use('/food',foodRouter);
// app.get('/',)
app.listen(5400,'localhost',()=>{
    console.log('server is started at 5400');
})