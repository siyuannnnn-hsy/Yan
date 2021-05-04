var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mysql=require('mysql');
var dbconfig = require('./config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
con.connect();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.set('views', path.join(__dirname, '/src/views'));
app.engine('html', require('ejs').__express);  
app.set('view engine', 'html');
//跳转及界面的链接地址
// var takeIn=require('./routes/');


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//精选界面
var indexRouter = require('./routes/index');
var cullingList = require('./routes/index');
var tuijianList = require('./routes/index');
var zhengzhiList = require('./routes/index');
var englishList = require('./routes/index');
var zhuanyekeList = require('./routes/index');
var studyList = require('./routes/index');
var renwuList = require('./routes/index');
var danciList = require('./routes/index');
var tikuList = require('./routes/index');
var qikanList = require('./routes/index');
var kechengList = require('./routes/index');
var mineList = require('./routes/index');
var xiangxiList = require('./routes/index');
var fenshuList = require('./routes/index');
var dingdanList = require('./routes/index');
var cengjingList = require('./routes/index');
var managerList = require('./routes/index');
var userList = require('./routes/index');
var listRouter = require('./routes/list');
var listtRouter = require('./routes/list');
var usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usersL', usersRouter);
app.use('/registL',renwuList);
app.use('/cullingL',cullingList);
app.use('/tuijianL',tuijianList);
app.use('/zhengzhiL',zhengzhiList);
app.use('/englishL',englishList);
app.use('/zhuanyekeL',zhuanyekeList);
app.use('/studyL',studyList);
app.use('/renwuL',renwuList);
app.use('danciL',danciList);
app.use('/tikuL',tikuList);
app.use('/qikanL',qikanList);
app.use('/kechengL',kechengList);
app.use('/mine',mineList);
app.use('xiangxiL',xiangxiList);
app.use('/fenshuL',fenshuList);
app.use('/dingdanL',dingdanList);
app.use('/cengjingL',cengjingList);
app.use('/managerL',managerList);
app.use('/userL',userList);


app.get('/cullingL',function(err,res){
  con.query('select * from culling',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/tuijianL',function(err,res){
  con.query('select * from tuijian',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/zhengzhiL',function(err,res){
  con.query('select * from zhengzhi',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/englishL',function(err,res){
  con.query('select * from english',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/zhuangyekeL',function(err,res){
  con.query('select * from zhuanyeke',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});


app.get('/studyL',function(err,res){
  con.query('select * from study',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/renwuL',function(err,res){
  con.query('select * from renwu',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('danciL',function(err,res){
  con.query('select * from danci',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/tikuL',function(err,res){
  con.query('select * from tiku',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/qikanL',function(err,res){
  con.query('select * from qikan',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});

app.get('/kechengL',function(err,res){
  con.query('select * from kecheng',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
