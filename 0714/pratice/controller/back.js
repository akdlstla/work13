const userModel = require('../model/user');

const signup = async(req,res) =>{
    console.log(req.body);
    const {userid, name, pw} = req.body
    const result = await userModel.signup(userid, name, pw)
    res.json({result:true});
    //res.json은 프론트에 보내기 위한  result 값인듯?
}

const login = async(req,res) =>{
    const {userid,pw} =req.body
    const result = await userModel.login(userid,pw)
    console.log('login',result);
    if(result.length > 0){
        res.json({result: true, id: result/*0을 왜쓰지?*/.id})
    }else{res.json({result:false})}
}
const info = async (req,res) =>{
    console.log('req.params.id', req.params.id);
    
   const result = await userModel.info(req.params.id);
   console.log('결과값',result);
   if(result.length > 0){
    res.json({result:true, info: result[0], message:'조회완료'})

   }else{res.json({result:false, info:null, massage:'존재하지 않는 회원입니다.'})}
}

const update = async (req,res)=>{
    const {userid,name,pw,id} = req.body
    const result = await userModel.update(userid,name,pw,id)
    res.json({result:true})
    
}

const deleteFunc = async(req,res) =>{
    console.log('delete',req.body);
    const result = await userModel.deleteFunc(req.body.id)
    res.json({result:true})
}
module.exports = {signup,login,info,update,deleteFunc}
