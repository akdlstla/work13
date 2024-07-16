const express = require('express');
const app = express()
const PORT = 8000;

//세팅
app.set('view engine', 'ejs')
app.use(express.json())

//router
const userRouter =
