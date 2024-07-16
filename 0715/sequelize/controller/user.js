// const {} =require('sequelize')
const { log } = require('console');
const {user} = require('../models');
const {Op, where} = require('sequelize')

//회원가입
const signup = async (req, res) => {
    const { userid, name, pw } = req.body;
    //존재여부 확인
    const find = await user.findOne({where:{userid}});
   if (find){
    res.json({result: false, message: '이미 존재하는 회원'})
   }else{
    const result = await user.create({userid,pw,name})
    res.json({result: true, message: '회원가입완료'})
   }
};
//로그인
const login = async (req, res) => {
    const { userid, pw } = req.body;
    //존재여부 확인
    const find = await user.findOne({where:{userid}});
    console.log('로그인', find);
    //res.json({result:true})
    if(find){if (find.pw === pw) {
        const data ={
            id:find.id,
            userid:find.userid,
            username:find.name,
        };
        res.json({result: true, code:100,message: '로그인 성공'})
    } else {
        res.json({result: false, code:1000,message: '비밀번호를 틀렸습니다'});
    }}
    else{
        res.json({ result: false, code:1001, message: '회원이 아닙니다' });
    }
};
//회원정보 한명 조회
const info = async (req, res) => {
    console.log('요청값', req.params.id);
    const {id} = req.params
    //findByPk는 객체구조분해할당이 아닌 ()로 보낼 것
    const find = await user.findByPk(id);
    console.log('결과',find);
    const response = {
        userid: find.userid,
        username: find.name,
        id: find.id,
        pw: find.pw,
    }
    res.json({result:true, response})
};
//회원정보 수정
const updateFunc = async (req, res) => {
    const { id, name, pw } = req.body;
    const result = await user.update({name, pw},{where:{id}} );
    res.json({ result: true });
};
//회원정보 삭제
const deleteFunc = async (req, res) => {
    const {id} = req.body
    await user.destroy({where:{id}});
    res.json({ result: true });
};
//회원 전체 정보

module.exports = { signup, login, info, updateFunc, deleteFunc,};
