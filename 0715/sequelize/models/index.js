'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.Post = require('./post')(sequelize);
//const model = require('./post')
//const db = model(sequelize)
//db.post = db
//이 부분이 있어야지 mysql의 테이블과 연결됨 
db.user =require('./user')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
