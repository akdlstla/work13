const express = require('express')
const {all,write, one, updateFunc, deleteFunc} = require('../controller/post')
const router = express.Router();

//get /all 전체글 조회
router.get('/all', all)
//post / write 글 하나 생성
router.post('/write', write);
//get /:id 글 하나 조회
router.get('/:id', one);
router.patch('/update', updateFunc)
router.delete('/delete',deleteFunc)



module.exports = router;
