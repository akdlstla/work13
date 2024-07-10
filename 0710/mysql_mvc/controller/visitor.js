const visitorModel = require('../model/visitor');

//전체 방명록 조회
const CallVisitor = async (req,res) => {
    const data = await visitorModel.MallVisitor();
    console.log('cont',data);
    res.json({result:data});
};

module.exports = {CallVisitor};