//하나의 모듈에 하나의 파일 만들기
const a = 10;
const b = 20;

function connect() {
    //~로직
    return a + b;
}

module.exports = connect;