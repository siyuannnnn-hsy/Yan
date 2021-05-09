var express = require('express');
var router = express.Router();
// var data=require('../data.json');var List=data.chapterList;
var mysql=require('mysql');
var dbconfig = require('../config/dbconfig.json');
var bodyParser=require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
var app = express();
var con = mysql.createConnection(dbconfig);
con.connect();
// var bodyParser=require('body-parser');
// var app = express();
/* GET home page. */
//后台登录界面基础界面
router.get('/', function(req, res) {
  res.type('html');
  res.render('takeIn', { title: 'Welcome' });
  console.log('执行的第19行');
  
});

//后台注册界面基础界面
router.get ('/regist',function(req,res,next){
  res.type('html');
  res.render('regist',{title:'后台注册界面'});
  console.log('执行的第26行');
})

//精选界面基础界面实现
router.get('/culling', function(req, res, next) {
  con.query("select * from culling",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("culling",{culling:result});
      console.log('执行的第38行');
      // console.log(result);
    }
  });
});
router.post('/culling',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from culling";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("culling",{dynamic:result});
      }
    })
  })

// router.get('/culling',function(req,res,next){
//   res.type('html');
//   res.render('culling',{title:'精选界面'})
// })

// router.get('/jingxuan',function(req,res){
//   res.render('jingxuan',{title:'精选界面'})
// })


//精选
// router.get('/denglu',function(req,res){
//   res.render('denglu',{title:'精选界面'})
// })

//推荐基础界面实现
router.get('/tuijian',function(req,res){
  con.query("select * from tuijian",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("tuijian",{tuijian:result});
      // console.log(result);
    }
  });
});
router.post('/tuijian',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from tuijian";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("tuijian",{dynamic:result});
      }
    })
  })

//政治基础界面实现
router.get('/zhengzhi',function(req,res){
  con.query("select * from zhengzhi",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("zhengzhi",{zhengzhi:result});
      // console.log(result);
    }
  });
});
router.post('/zhengzhi',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from zhengzhi";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("zhengzhi",{dynamic:result});
      }
    })
  })

//英语基础界面实现
router.get('/english',function(req,res){
  con.query("select * from english",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("english",{english:result});
      // console.log(result);
    }
  });
})
router.post('/english',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from english";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("english",{dynamic:result});
      }
    })
  })

//专业课基础界面实现
router.get('/zhuanyeke',function(req,res){
  con.query("select * from zhuanyeke",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("zhuanyeke",{zhuanyeke:result});
      // console.log(result);
    }
  });
})
router.post('/zhuanyeke',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from zhuanyeke";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("zhuanyeke",{dynamic:result});
      }
    })
  })

//学习基础界面实现
router.get('/study',function(req,res){
  con.query("select * from study",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("study",{study:result});
      // console.log(result);
    }
  });
});
router.post('/study',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from study";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("study",{dynamic:result});
      }
    })
  })

//每日任务基础界面实现
router.get('/renwu',function(req,res){
  con.query("select * from renwu",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("renwu",{renwu:result});
      // console.log(result);
    }
  });
});
router.post('/renwu',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from renwu";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("renwu",{dynamic:result});
      }
    })
  })

//背单词
router.get('/danci',function(req,res){
  con.query("select * from danci",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("danci",{danci:result});
      // console.log(result);
    }
  });
});
router.post('/danci',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from danci";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("danci",{dynamic:result});
      }
    })
  })


//研题库
router.get('/tiku',function(req,res){
  con.query("select * from tiku",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("tiku",{tiku:result});
      // console.log(result);
    }
  });
});
router.post('/tiku',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from tiku";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("tiku",{dynamic:result});
      }
    })
  })


//学习期刊基础界面实现
router.get('/qikan',function(req,res){
  con.query("select * from qikan",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("qikan",{qikan:result});
      // console.log(result);
    }
  });
});
router.post('/qikan',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from qikan";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("qikan",{dynamic:result});
      }
    })
  })


//在线课程基础界面实现
router.get('/kecheng',function(req,res){
  res.type('html');
  res.render('kecheng',{title:'在线课程'})
})

//我的
router.get('/mine',function(req,res){
  con.query("select * from userlist",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("mine",{userlist:result});
      // console.log(result);
    }
  });
});
router.post('/mine',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from userlist";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("mine",{dynamic:result});
      }
    })
  })


//详细信息
router.get('/xiangxi',function(req,res){
  con.query("select * from userlist",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("xiangxi",{userlist:result});
      // console.log(result);
    }
  });
});
router.post('/xiangxi',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from userlist";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("xiangxi",{dynamic:result});
      }
    })
  })


//分数统计
router.get('/fenshu',function(req,res){
  res.type('html');
  res.render('fenshu',{title:'分数统计'})
})

//我的订单
router.get('/dingdan',function(req,res){
  res.type('html');
  res.render('dingdan',{title:'我的订单'})
})

//历史课程
router.get('/cengjing',function(req,res){
  res.type('html');
  res.render('cengjing',{title:'历史课程'})
})

//管理员信息
router.get('/managerM',function(req,res){
  con.query("select * from managerList",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("managerM",{managerList:result});
      // console.log(result);
    }
  });
});
router.post('/managerM',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from managerlist";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("mine",{dynamic:result});
      }
    })
  })



//用户信息
router.get('/userM',function(req,res){
  con.query("select * from userlist",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.type('html');
      res.render("userM",{userlist:result});
      // console.log(result);
    }
  });
});
router.post('/userM',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Dongtai).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from userlist";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.render("userM",{dynamic:result});
      }
    })
  })

  router.get('/delculling',function(req,res,next){
    var cId=req.query.cId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from culling where cId=?",[cId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/culling");
      }
    });
  });
  router.get('/deldanci',function(req,res,next){
    var wordId=req.query.wordId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from danci where wordId=?",[wordId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/danci");
      }
    });
  });
  router.get('/deltuijian',function(req,res,next){
    var TId=req.query.TId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from tuijian where TId=?",[TId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/tuijian");
      }
    });
  });
  router.get('/delenglish',function(req,res,next){
    var EId=req.query.EId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from english where EId=?",[EId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/english");
      }
    });
  });
  router.get('/delM',function(req,res,next){
    var managerID=req.query.managerID;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from managerlist where managerID=?",[manaerID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/delM");
      }
    });
  });
  router.get('/delusers',function(req,res,next){
    var userID=req.query.userID;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from userlist where userID=?",[userID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/mine");
      }
    });
  });
  router.get('/delR',function(req,res,next){
    var Idr=req.query.Idr;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from renwu where Idr=?",[Idr],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/renwu");
      }
    });
  });
  router.get('/delS',function(req,res,next){
    var sId=req.query.sId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from study where sId=?",[sId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/study");
      }
    });
  });
  router.get('/delQ',function(req,res,next){
    var sId=req.query.sId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from qikan where qId=?",[qId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/qikan");
      }
    });
  });
  router.get('/delT',function(req,res,next){
    var sId=req.query.sId;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from tiku where tId=?",[tId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/tiku");
      }
    });
  });
  router.get('/delX',function(req,res,next){
    var userID=req.query.userID;
    con.query("SET FOREIGN_KEY_CHECKS=0")
    con.query("delete from userlist where userID=?",[userID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/xiangxi");
      }
    });
  });

  router.get('/editculling', function(req, res, next) {
    var cId=req.query.cId;
    con.query("select * from culling where cId=?",[cId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editculling',{editcullingList:result});
      }
    })
  });
  router.post('/editCullingAcitve',function(req,res,next){
    var Sname=req.body.Sname;
    var subject=req.body.subject;
    var content= req.body.content;
    var cId=req.body.cId;
    con.query("insert culling set Sname=?,subject=?,content=?,cId=?",[Sname,subject,content,cId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/culling");
      }
    })
  });
  router.get('/editdanci', function(req, res, next) {
    var wordId=req.query.wordId;
    con.query("select * from danci where wordId=?",[wordId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editdanci',{editDanciList:result});
      }
    })
  });
  router.post('/editDanciAcitve',function(req,res,next){
    var word=req.body.word;
    var content=req.body.content;
    var userID= req.body.userID;
    var wordId=req.body.wordId;
    con.query("insert danci set word=?,content=?,userID=?,wordId=?",[word,content,userID,wordId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/danci");
      }
    })
  })

  router.get('/editenglish', function(req, res, next) {
    var EId=req.query.EId;
    con.query("select * from english where EId=?",[EId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editenglish',{editEnglishList:result});
      }
    })
  });
  router.post('/editEnglishAcitve',function(req,res,next){
    var subject=req.body.subject;
    var content=req.body.content;
    var EId=req.body.EId;
    con.query("insert english set subject=?,content=?,EId=?",[word,content,EId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/english");
      }
    })
  })
  router.get('/editManager', function(req, res, next) {
    var managerID=req.query.managerID;
    con.query("select * from managerlist where managerID=?",[managerID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editManager',{editManagerList:result});
      }
    })
  });
  router.post('/editManagerAcitve',function(req,res,next){
    var Mname=req.body.Mname;
    var managerID=req.body.managerID;
    var PW=req.body.PW;
    var pNum=req.body.pNum;
    var zhiwei=req.body.zhiwei;
    con.query("insert managerrlist set Mname=?,managerID=?,PW=?,pNum=?,zhiwei=?",[Mname,managerID,PW,pNum,zhiwei],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/managerM");
      }
    })
  })
  router.get('/editqikan', function(req, res, next) {
    var qId=req.query.qId;
    con.query("select * from qikan where EId=?",[qId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editQikan',{editQikanList:result});
      }
    })
  });
  router.post('/editQikanAcitve',function(req,res,next){
    var subject=req.body.subject;
    var content=req.body.content;
    var userID=req.body.userID;
    var qId=req.body.qId;
    con.query("insert english set subject=?,content=?,userID=?,qId=?",[word,content,userID,qId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/qikan");
      }
    })
  })
  router.get('/editrenwu', function(req, res, next) {
    var Idr=req.query.Idr;
    con.query("select * from renwu where Idr=?",[Idr],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editrenwu',{editRenwuList:result});
      }
    })
  });
  router.post('/editRenwuAcitve',function(req,res,next){
    
    var content=req.body.content;
    var time=req.body.time;
    var sure=req.body.sure;
    var userID=req.body.userID;
    var Idr=req.body.Idr;
    con.query("insert english set content=?,time=?,sure=?,userID=?,Idr=?",[content,time,sure,userID,Idr],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/renwu");
      }
    })
  })
  router.get('/edittiku', function(req, res, next) {
    var tId=req.query.tId;
    con.query("select * from tiku where tId=?",[tId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('edittiku',{editTikuList:result});
      }
    })
  });
  router.post('/editTikuEnglishAcitve',function(req,res,next){
    var tId=req.body.tId;
    var subject=req.body.subject;
    var content=req.body.content;
    var userID=req.body.userID;
    var qnswer=req.body.answer;
    con.query("insert tiku set subject=?,content=?,answer=?,userID=?,tId=?",[subject,content,answer,userID,tId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/tiku");
      }
    })
  })
  router.get('/editTuijian', function(req, res, next) {
    var TId=req.query.TId;
    con.query("select * from tuijian where TId=?",[TId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('edittuijian',{editTuijianList:result});
      }
    })
  });
  router.post('/editTuijianAcitve',function(req,res,next){
    var subject=req.body.subject;
    var content=req.body.content;
    var Tname=req.body.Tname;
    var TId=req.body.TId;
    con.query("insert tuijian set subject=?,content=?,Tname=?,TId=?",[subject,content,Tname,TId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/tuijian");
      }
    })
  })
  router.get('/edituser', function(req, res, next) {
    var userID=req.query.userID;
    con.query("select * from userlist where userID=?",[userID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('edituser',{editUserList:result});
      }
    })
  });
  router.post('/editUserAcitve',function(req,res,next){
    var subject=req.body.subject;
    var name=req.body.name;
    var userID=req.body.userID;
    var iphoneNum=req.body.iphoneNum;
    var userPW=req.body.userPW;
    var motto=req.body.motto;
    con.query("insert userlist set subject=?,name=?,userID=?,iphoneNUm=?,userPW=?,motto=?",[subject,name,userID,iphoneNum,userPW,motto],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/userM");
      }
    })
  })
  router.get('/editXiangxi', function(req, res, next) {
    var userID=req.query.userID;
    con.query("select * from userlist where userID=?",[userID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editXiangxi',{editXiangxiList:result});
      }
    })
  });
  router.post('/editXiangxiAcitve',function(req,res,next){
    var subject=req.body.subject;
    var name=req.body.name;
    var userID=req.body.userID;
    var iphoneNum=req.body.iphoneNum;
    var userPW=req.body.userPW;
    var motto=req.body.motto;
    con.query("insert userlist set subject=?,name=?,userID=?,iphoneNUm=?,userPW=?,motto=?",[subject,name,userID,iphoneNum,userPW,motto],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/xiangxi");
      }
    })
  })
  router.get('/editzhengzhi', function(req, res, next) {
    var zId=req.query.zId;
    con.query("select * from zhengzhi where zId=?",[zId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editzhengzhi',{editZhengzhiList:result});
      }
    })
  });
  router.post('/editZhengzhiAcitve',function(req,res,next){
    var subject=req.body.subject;
    var content=req.body.content;
    var zId=req.body.zId;
    con.query("insert english set subject=?,content=?,zId=?",[word,content,zId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/zhengzhi");
      }
    })
  })
  router.get('/editzhuanye', function(req, res, next) {
    var zId=req.query.zId;
    con.query("select * from zhuangyeke where zId=?",[zId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editzhuanye',{editZhuanyeList:result});
      }
    })
  });
  router.post('/editZhuanyeAcitve',function(req,res,next){
    var subject=req.body.subject;
    var content=req.body.content;
    var zId=req.body.zId;
    con.query("insert zhuanyeke set subject=?,content=?,zId=?",[word,content,zId],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/zhuanyeke");
      }
    })
  })
  router.get('/editMine', function(req, res, next) {
    var userID=req.query.userID;
    con.query("select * from userlist where userID=?",[userID],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        // console.log(result);
        res.type('html');
        res.render('editMine',{editMineList:result});
      }
    })
  });
  router.post('/editMineAcitve',function(req,res,next){
    var subject=req.body.subject;
    var name=req.body.name;
    var userID=req.body.userID;
    var iphoneNum=req.body.iphoneNum;
    var userPW=req.body.userPW;
    var motto=req.body.motto;
    con.query("insert userlist set subject=?,name=?,userID=?,iphoneNUm=?,userPW=?,motto=?",[subject,name,userID,iphoneNum,userPW,motto],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.type('html');
        res.redirect("/mine");
      }
    })
  })

module.exports = router;
