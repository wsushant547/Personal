const mysql2=require('mysql2/promise')
const pool=mysql2.createPool(
    {
        user:'sushant',
        host:'localhost',
        password:'manager',
        database:'booking_tracker'
    }
)
module.exports=pool;