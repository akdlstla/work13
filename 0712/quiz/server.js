const express = require('express');
const app = express()
const PORT = 8000;

app.set('view engine','ejs')
app.use(express.json())

const userRouter = require('./routes/user');
app.use('/', userRouter);

app.use('*',(req,res)=>{
    res.status(404).render('404');
});

app.listen (PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})