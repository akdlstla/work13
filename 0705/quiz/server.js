const express =require('express')
const app = express()
const PORT = 8000;

//바디펄서
app.use(express.json())
//뷰엔진
app.set('view engine','ejs');


//라우터
//==========페이지
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/get',(req,res)=>{
    res.render('get')
})
app.get('/post',(req,res)=>{
    res.render('post')
})

//==========데이터 요청/응답
app.get('/resultGet',(req,res)=>{
    console.log('요청값', req.query);
    res.json({response: req.query});
});

const id = 'kdt13';
const pw = '123';

app.post('/resultPost',(req,res)=>{
    console.log('요청값', req.body);
    const {id: reqId, pw: reqPw} = req.body
    if(id === reqId && pw === reqPw){
        res.json({result: true, userId: id});
    }else{
        res.json({result: false, userId: null})
    }
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})