 
const pool=require('../db/pool')
const jwt=require('jsonwebtoken')
const config=require('./config')
async function auth(req,res,next){
    const path=req.url;
    if(path=='/user/signin' || path=="/user/signup" ){
        return next();   
    }
    // const bearer=req.headers.authorization
    // console.log(typeof(bearer))
    // const token =bearer.split(' ')[1]
    // console.log(token)
    console.log("hi")
    
    try {
        const  data=jwt.verify(token,config.SECREAT)
        // console.log( data)
        const headers=req.headers;
        headers.uid=data.uid;
        headers.role=data.role;
        // console.log(headers);
        next()
    } catch (error) {
        res.send(error)
    }
    
         
}

module.exports=auth;