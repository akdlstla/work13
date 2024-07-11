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
    const query ='SELECT * FROM kdt13.test2';
    const [row] = await conn.query(query);
    console.log('model',row);
    await conn.end();
    return row;
}
const getUser = async (id) =>{
    const conn = await getConn();
    const query ='SELECT * FROM test2 WHERE id =?';
    const [row] = await conn.query(query, [id]);
    await conn.end();
    return row;
}