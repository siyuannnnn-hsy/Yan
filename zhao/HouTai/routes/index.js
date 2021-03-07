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

// router.get('/jingxuan',function(req,res){
//   res.render('jingxuan',{title:'精选界面'})
// })


//精选
// router.get('/denglu',function(req,res){
//   res.render('denglu',{title:'精选界面'})
// })

//推荐基础界面实现
router.get('/tuijian',function(req,res){
  res.render('tuijian',{title:'推荐'})
})

//政治基础界面实现
router.get('/zhengzhi',function(req,res){
  res.render('zhengzhi',{title:'政治'})
})

//英语基础界面实现
router.get('/english',function(req,res){
  res.render('english',{title:'英语'})
})

//专业课基础界面实现
router.get('/zhuanyeke',function(req,res){
  res.render('zhuanyeke',{title:'专业课'})
})

//学习基础界面实现
router.get('/study',function(req,res){
  res.render('study',{title:'学习'})
})

//每日任务基础界面实现
router.get('/renwu',function(req,res){
  res.render('renwu',{title:'每日任务'})
})

//背单词
router.get('/danci',function(req,res){
  res.render('danci',{title:'单词'})
})

//研题库
router.get('/tiku',function(req,res){
  res.render('tiku',{title:'图库'})
})

//学习期刊基础界面实现
router.get('/qikan',function(req,res){
  res.render('qikan',{title:'期刊'})
})

//在线课程基础界面实现
router.get('/kecheng',function(req,res){
  res.render('kecheng',{title:'在线课程'})
})

//我的
router.get('/mine',function(req,res){
  res.render('mine',{title:'我的'})
})

//详细信息
router.get('/xiangxi',function(req,res){
  res.render('xiangxi',{title:'详细信息'})
})

//分数统计
router.get('/fenshu',function(req,res){
  res.render('fenshu',{title:'分数统计'})
})

//我的订单
router.get('/dingdan',function(req,res){
  res.render('dingdan',{title:'我的订单'})
})

//历史课程
router.get('/cengjing',function(req,res){
  res.render('cengjing',{title:'历史课程'})
})
module.exports = router;
