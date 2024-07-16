require('dotenv').config()
const mysql = require('mysql2/promise')

const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DATA,
    connectionLimit: 20,
})

const signup = async(userid,name,pw)=>{
    const query = 'insert into user_mvc (userid,name,pw) values (?,?,?)'
    const [result] = await conn.query(query,[userid, name, pw]);
    return result
}

const login = async(userid,pw) =>{
    const query = 'select * from user_mvc where userid =? and pw = ?'
    const [result] = await conn.query(query,[userid,pw])
    return result
}

const info = async(id)=>{
    const query = 'select * from user_mvc where id =? '
    const [result]= await conn.query(query,[id])
    return result
}

const update = async(userid, name, pw, id) =>{
    const query = 'update user_mvc set userid =?, name=?,pw=? where id=?'
    const[result] = await conn.query(query,[userid, name, pw, id])
    return result
}

const deleteFunc = async(id)=>{
    const query = "delete from user_mvc where id =?"
    const [result] = await conn.query(query,[id])
    return result
}

module.exports = {signup, login, update, deleteFunc, info}