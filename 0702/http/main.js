const http = require('http')
const fs =require('fs')
const PORT = 8000;

const server = http.createServer((req,res) =>{
    //파일 전송
    fs.readFile("index.html", (err, data)=>{ 
        //(err, data)의 경우 순서가 정해져 있다. err의 경우 다른 이름으로 해도 상관없음 단 에러처리할때 이름을 똑같이해야함 
        //순서가 정해져 있기 때문에 ([에러],[데이터])순으로 적되 변수 이름은 바꿔도 됨
        if(err){
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
            return;//리턴해서 나간다는 뜻
        }
        res.writeHead(200);
        res.write(data);
        res.end('<div>END</div>');
    });
});
server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});