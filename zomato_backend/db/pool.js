const mysql=require('mysql2/promise')
const pool=mysql.createPool(
     {
        user:'sushant',
        host:'localhost',
        password:'manager',
        database:'project'
     }

)
module.exports=pool;