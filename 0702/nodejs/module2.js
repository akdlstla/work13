//하나의 모듈 파일에 여러개의 모듈 만들기
//방법1
function add(x,y) {
    return x+y;
}
function subtract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x * y;
}
const a = 10
// const add = (x , y) => x + y;
// const subtract = (x ,y) => x -y;
// const multiply = (x, y) => x * y;
//화살표 함수는 한줄로 쓸 때 {return} 생략 가능

module.exports = { add, subtract , multiply , a};
//화살표 함수로 만들었을 때는 무조건 module.exports는 하단에 위치해야함


//방법2
/*module.exports.add = function(x,y){
    return x+y
}
module.exports.subtract = function(x,y){
    return x-y
}
module.exports.multiply = function(x,y){
    return x*y
}
*/
//방법2의 생략버전

exports.add = function(x,y){
    return x+y
}
exports.subtract = function(x,y){
    return x-y
}
exports.multiply = function(x,y){
    return x*y
}