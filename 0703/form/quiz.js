const express = require('express');
const app = express();
const PORT= 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('quiz1');
});
app.get('/getform',(req, res)=>{
    console.log(req.query);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})