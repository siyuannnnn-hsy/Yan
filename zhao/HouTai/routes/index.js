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


module.exports = router;
