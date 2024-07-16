const express = require('express');
const app = express();
const PORT = 8000;

app.set ('view engine','ejs')
app.use (express.json())


const frontRouter = require('./routes/front');
app.use('/', frontRouter);

const backRouter = require('./routes/back')
app.use('/api/back', backRouter);



app.listen(PORT,()=>{
    console.log(`http://localhost:${8000}`);
})