/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.14 : Database - yan
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`yan` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `yan`;

/*Table structure for table `culling` */

DROP TABLE IF EXISTS `culling`;

CREATE TABLE `culling` (
  `Sname` varchar(20) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `culling` */

insert  into `culling`(`Sname`,`subject`,`content`) values ('政治前期复习','政治','肖秀荣精讲精练+1000题，至少看三遍，做三遍题'),('政治后期复习','政治','肖肖秀荣的形势与政策，肖四肖八，徐涛的背诵小黄书'),('英语书籍','英语','红宝书、恋练有词、考研真相、黄皮书、真题超精解、考研英语高分写作、王江涛的考研英语高分写作字帖');

/*Table structure for table `danci` */

DROP TABLE IF EXISTS `danci`;

CREATE TABLE `danci` (
  `word` varchar(20) NOT NULL,
  `content` varchar(50) NOT NULL,
  `userID` varchar(6) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `danci` */

insert  into `danci`(`word`,`content`,`userID`) values ('accommodate','使适应，使符合一致','001'),('accommodate','使适应，使符合一致','002');

/*Table structure for table `english` */

DROP TABLE IF EXISTS `english`;

CREATE TABLE `english` (
  `subject` varchar(10) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `english` */

insert  into `english`(`subject`,`content`) values ('英语书籍','红宝书、恋练有词、考研真相、黄皮书、真题超精解、考研英语高分写作、王江涛的考研英语高分写作字帖');

/*Table structure for table `fenshu` */

DROP TABLE IF EXISTS `fenshu`;

CREATE TABLE `fenshu` (
  `course` varchar(10) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `fenshu` */

/*Table structure for table `kecheng` */

DROP TABLE IF EXISTS `kecheng`;

CREATE TABLE `kecheng` (
  `course` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  `userID` varchar(6) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `kecheng` */

/*Table structure for table `managerlist` */

DROP TABLE IF EXISTS `managerlist`;

CREATE TABLE `managerlist` (
  `Mname` varchar(10) NOT NULL,
  `managerID` varchar(10) NOT NULL,
  `PW` varchar(6) NOT NULL,
  `pNum` varchar(11) NOT NULL,
  `zhiwei` varchar(20) NOT NULL,
  PRIMARY KEY (`managerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `managerlist` */

insert  into `managerlist`(`Mname`,`managerID`,`PW`,`pNum`,`zhiwei`) values ('小张','001','123456','15224589632','职员'),('小钱','002','123456','12548523695','职员'),('小孙','003','555555','51258469528','职员'),('小李','004','333333','12563248523','职员'),('小王','005','111111','15236485236','职员');

/*Table structure for table `math` */

DROP TABLE IF EXISTS `math`;

CREATE TABLE `math` (
  `subject` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `math` */

insert  into `math`(`subject`,`content`) values ('考研数学一','考试内容：a.高等数学(函数、极限、连续、一元函数微积分学、向量代数与空间解析几何、多元函数的微积分学、无穷级数、常微分方程);b.线性代数(行列式、矩阵、向量、线性方程组、矩阵的特征值和特征向量、二次型);c.概率论与数理统计(随机事件和概率、随机变量及其概率分布、二维随机变量及其概率分布、随机变量的数字特征、大数定律和中心极限定理、数理统计的基本概念、参数估计、假设检验)。'),('考研数学三','考试内容：a.微积分(函数、极限、连续、一元函数微积分学、多元函数微积分学、无穷级数、常微分方程与差分方程);b.线性代数(行列式、矩阵、向量、线性方程组、矩阵的特征值和特征向量、二次型);c.概率论与数理统计(随机事件和概率、随机变量及其概率分布、二维随机变量及其概率分布、随机变量的数字特征、大数定律和中心极限定理、数理统计的基本概念、参数估计、假设检验)。'),('考研数学二','考试内容：a.高等数学(函数、极限、一元函数微积分学、常微分方程);b.线性代数(行列阵、矩阵、向量、线性方程组、矩阵的特征值和特征向量)。');

/*Table structure for table `qikan` */

DROP TABLE IF EXISTS `qikan`;

CREATE TABLE `qikan` (
  `subject` varchar(20) NOT NULL,
  `content` varchar(100) NOT NULL,
  `userID` varchar(6) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `qikan` */

/*Table structure for table `renwu` */

DROP TABLE IF EXISTS `renwu`;

CREATE TABLE `renwu` (
  `content` varchar(200) NOT NULL,
  `time` varchar(10) NOT NULL,
  `sure` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `renwu` */

insert  into `renwu`(`content`,`time`,`sure`,`userID`) values ('背英语单词20个','1小时','已完成','001');

/*Table structure for table `study` */

DROP TABLE IF EXISTS `study`;

CREATE TABLE `study` (
  `title` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `study` */

insert  into `study`(`title`,`content`,`subject`,`userID`) values ('做一套数学试卷','数学试卷练习必须要跟上','数学','001'),('背单词20个','关于背单词的重要性，上网查查就知道了','英语','001');

/*Table structure for table `tiku` */

DROP TABLE IF EXISTS `tiku`;

CREATE TABLE `tiku` (
  `subject` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL,
  `answer` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tiku` */

insert  into `tiku`(`subject`,`content`,`answer`,`userID`) values ('计算机','为解决计算机与打印机之间速度不匹配的问题，通常设置一个打印数据缓冲区，主机将要输出的数据依次写入该缓冲区，而打印机则依次从该缓冲区中取出数据。该缓冲区的逻辑结构应该是 A.栈 B.队列 C.树 D.图','A','001'),('计算机','设栈S和队列Q的初始状态均为空，元素abcdefg依次进入栈S。若每个元素出栈后立即进入队列Q，且7个元素出队的顺序是bdcfeag，则栈S的容量至少是 A.1 B.2 C.3 D.4','D','001'),('计算机','给定二叉树图所示。设N代表二叉树的根，L代表根结点的左子树，R代表根结点的右子树。若遍历后的结点序列为3，1，7，5，6，2，4，则其遍历方式是 A.LRN B.NRL C.RLN D.RNL','B','001'),('计算机','将森林转换为对应的二叉树，若在二叉树中，结点u是结点v的父结点的父结点，则在原来的森林中，u和v可能具有的关系是 I.父子关系 II.兄弟关系 III. u的父结点与v的父结点是兄弟关系A.只有II B.I和II C.I和III D.I、II和III','C','001');

/*Table structure for table `tuijian` */

DROP TABLE IF EXISTS `tuijian`;

CREATE TABLE `tuijian` (
  `Tname` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  `subject` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tuijian` */

insert  into `tuijian`(`Tname`,`content`,`subject`) values ('英语书籍','红宝书、恋练有词、考研真相、黄皮书、真题超精解、考研英语高分写作、王江涛的考研英语高分写作字帖','英语'),('考研政治','肖秀荣《1000题》、肖秀荣《知识点精讲精练》、肖秀荣《命题冲刺8套卷》、肖秀荣《命题终极预测4套卷》、徐涛20题','政治'),('考研数学','李永乐、王式安考研数学复习全书、张宇36讲、张宇1000题、张宇真题大全讲、合工大五套卷、高数18讲','数学'),('考研专业课','专业课复习并没有太多的方法论，就是一个很简单的事，书读百遍，其义自见。','专业课'),('考研建议','不要着急！考研和高考一样，就是一场考试。考试最重要的就是弄懂所有知识点，然后在考场上多做几道题。而你在接下来的一年里需要做的无非就是好好学习，天天向上罢了。','其他');

/*Table structure for table `userlist` */

DROP TABLE IF EXISTS `userlist`;

CREATE TABLE `userlist` (
  `name` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL,
  `iphoneNum` char(11) NOT NULL,
  `userPW` varchar(6) NOT NULL,
  `motto` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `userlist` */

insert  into `userlist`(`name`,`userID`,`iphoneNum`,`userPW`,`motto`,`subject`) values ('小赵','001','15224853695','111111','没啥可说的','软件工程'),('小黄','002','25486325951','111111','你好，加油','计算机');

/*Table structure for table `zhengzhi` */

DROP TABLE IF EXISTS `zhengzhi`;

CREATE TABLE `zhengzhi` (
  `subject` varchar(10) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `zhengzhi` */

insert  into `zhengzhi`(`subject`,`content`) values ('政治中后期复习','肖肖秀荣的形势与政策，肖四肖八，徐涛的背诵小黄书'),('政治前期复习','肖秀荣精讲精练+1000题，至少看三遍，做三遍题'),('考研政治相关','马原部分约占24%、毛概部分约占30%、中国近现代史纲要约占14%、思想道德修养与法律基础约占16%、形势与政策以及当代世界经济与政治约占16%、单项选择题16分(16小题，每小题1分)、多项选择题34分(17小题，每小题2分)、材料分析题50分');

/*Table structure for table `zhuanyeke` */

DROP TABLE IF EXISTS `zhuanyeke`;

CREATE TABLE `zhuanyeke` (
  `subject` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `zhuanyeke` */

insert  into `zhuanyeke`(`subject`,`content`) values ('操作系统','《操作系统》的重点在进程管理和内存管理，其次是文件管理和I/O管理。参考书目是《计算机操作系统》(汤子瀛等主编)。注意的是，存储部分、I/O部分和计算机组成原理课程中有重合，可以相互结合着看。虽然这部分知识相对来说没有那么难，但是复习的时候也不能忽视。'),('数据结构','这门课程是统考408初试考试四门专业课科目之一，也是大多数高校考研计算机初试必考科目，可见数据结构这门课在考研计算机初试中的重要地位。这门课程在计算机考研的考试范围中也是非常重要的，而《数据结构》的重点章节是线性表、树、图、查找和排序。参考书目是《数据结构C语言版》《数据结构精讲和习题讲解》（严蔚敏），大家可以结合这两本书进行知识点的学习，和一些习题的练习');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
