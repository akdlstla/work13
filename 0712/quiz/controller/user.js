const model = require('../model/user')

const main = async(req,res)=>{    
    res.render('index')
}
const login =async (req,res)=>{
    console.log('요청값', req.body);
    const {id: reqId, pw: reqPw} = req.body;
    const data = await model.getUser(reqId, reqPw);
console.log('데이터',data[0])
 if( data.length !== 0) {
    console.log('데이터',data)
    res.json({result: true, id: data[0].userid})
    console.log('userId',model.getUser.userid);
 } else {
    res.json({result: false})
 }
    // if(model.getUser().userId === reqId && model.getUser().pw === reqPw){
    //     res.json({result: true, userId: model.getUser().userId});
    // }else{
    //     res.json({result: false, userId: null})
    // }

    //res.json([{result:data}])
    /*json 형식
    res.json([{ id: 1, username: "daisy" }]);
    */
}

module.exports = {main, login}