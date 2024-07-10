const express =require('express')
const app = express()
const PORT = 8000;

//바디펄서
app.use(express.json())
//뷰엔진
app.set('view engine','ejs');


//라우터
//==========페이지
const quizRouter = require('./routes/user');
app.use('/', quizRouter);

//==========데이터 요청/응답



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})