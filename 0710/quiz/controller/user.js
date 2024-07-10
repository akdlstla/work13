const Model = require('../model/user')

exports.main = (req,res)=>{
    res.render('index');
};

exports.get = (req,res)=>{
    res.render('get')
}

exports.post = (req,res) =>{
    res.render('post')
}

exports.resultGet =(req,res)=>{
    console.log('요청값', req.query);
    res.json({response: req.query});
}

exports.resultPost = (req,res)=>{
    console.log('요청값', req.body);
    const {id: reqId, pw: reqPw} = req.body;
    if(Model.userInfo().id === reqId && Model.userInfo().pw === reqPw){
        res.json({result: true, userId: Model.userInfo().id});
    }else{
        res.json({result: false, userId: null})
    }
}