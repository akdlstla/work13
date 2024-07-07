const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//body-falser
app.use(express.urlencoded({extented:true}));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');
//정적 파일 설정
//http://localhost:8000/upload/파일명
app.use('/uploads', express.static(__dirname + '/uploads'))
//multer
const upload = multer({
    //dest: 업로드한 파일을 저장할 폴더
    dest: 'uploads/',
});

//multer 세부설정
const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    //diskStorage: 파일을 저장하기 위한 모든 제어 기능 제공(파일 저장관련 설정)
    storage: multer.diskStorage({
        //destination: 업로드한 파일을 저장할 폴더 지정
        destination(req, file , done){
            done(null, 'uploads/')
        },
        //filename: 파일 이름 결정(요청객체 , 업로드된파일객체, 콜백함수)
        filename(req, file , done){
            //확장자 추출
            const ext = path.extname(file.originalname)
            //파일 이름 추출
            const newName = path.basename(file.originalname,ext) + Date.now() + ext;
            done(null,newName);
        },
    }),
    //limits:파일 용량 제한
    limits:{fileSize:1024*1024*5},//5mb제한
});
//방법2
/*
const storage = multer.diskStorage({
    //destination: 업로드한 파일을 저장할 폴더 지정
    destination(req, file , done){
        done(null, 'uploads/')
    },
    //filename: 파일 이름 결정(요청객체 , 업로드된파일객체, 콜백함수)
    filename(req, file , done){
        //확장자 추출
        const ext = path.extname(file.originalname)
        //파일 이름 추출
        const newName = path.basename(file.originalname,ext) + Date.now() + ext;
        done(null,newName);
    },
})
const limits = {fileSize:1024*1024*5}//5mb제한
const uploadDetail2 = multer({storage, limits})
*/

//router
//=======페이지
app.get('/',(req,res)=>{
    res.render('index');
});
//====================요청과 응답 데이터
//싱글: single()
app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
    console.log('file',req.file);
    console.log('title',req.body);
})
//멀티(ver1): array()
app.post('/upload/array',uploadDetail.array('userfiles'),(req,res)=>{
    console.log('file',req.files);
    console.log('title',req.body);
} );
//멀티(ver2): fields()
app.post('/upload/fields',uploadDetail.fields([{name: 'userfile1'},{name: 'userfile2'}]),(req,res)=>{
    console.log('file',req.files);
    console.log('title',req.body);
} );

//동적

app.post("/upload/axios", uploadDetail.single('userfile'),(req,res)=>{
    
    res.json({file:req.file ,title:req.body});
});

app.get('/submit',(req,res)=>{
    res.render('submit');
});
app.get('/func',(req,res)=>{
    res.render('func');
})
app.post('/quiz',(req,res)=>{
    res.render
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})