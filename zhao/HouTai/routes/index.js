var express = require('express');
var router = express.Router();

/* GET home page. */
//后台登录界面基础界面
router.get('/', function(req, res, next) {
  res.render('takeIn', { title: 'Welcome' });
});

//后台注册界面基础界面
router.get ('/regist',function(req,res){
  res.render('regist',{title:'后台注册界面'})
})

//精选界面基础界面实现
router.get('/culling',function(req,res){
  res.render('culling',{title:'精选界面'})
})
module.exports = router;
