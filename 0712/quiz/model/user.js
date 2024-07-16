require('dotenv').config();
const mysql = require('mysql2/promise');
const getConn = async() =>{
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA,
    })
}

const user = async () =>{
    const conn = await getConn();
    const query ='SELECT * FROM test2';
    const [row] = await conn.query(query);
    console.log('model',row);
    await conn.end();
    return row;
}
const getUser = async (userid,pw) =>{
    console.log( userid, pw)
    const conn = await getConn();
    const query ='SELECT * FROM test2 WHERE userid =? AND pw=?';
    const [row] = await conn.query(query, [userid, pw]);
    console.log('row',row);
    await conn.end();
    return row;
}

module.exports ={user,getUser}