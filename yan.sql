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

insert  into `culling`(`Sname`,`subject`,`content`) values ('政治前期复习','政治','肖秀荣精讲精练+1000题，至少看三遍，做三遍题'),('政治后期复习','政治','肖肖秀荣的形势与政策，肖四肖八，徐涛的背诵小黄书'),('英语书籍','英语','红宝书、恋练有词、考研真相、黄皮书、真题超精解、考研英语高分写作、王江涛的考研英语高分写作字帖'),('考研政治相关','政治','马原部分约占24%、毛概部分约占30%、中国近现代史纲要约占14%、思想道德修养与法律基础约占16%、形势与政策以及当代世界经济与政治约占16%');

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

/*Table structure for table `tiku` */

DROP TABLE IF EXISTS `tiku`;

CREATE TABLE `tiku` (
  `subject` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL,
  `answer` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tiku` */

insert  into `tiku`(`subject`,`content`,`answer`,`userID`) values ('计算机','为解决计算机与打印机之间速度不匹配的问题，通常设置一个打印数据缓冲区，主机将要输出的数据依次写入该缓冲区，而打印机则依次从该缓冲区中取出数据。该缓冲区的逻辑结构应该是 A.栈 B.队列 C.树 D.图','A','001'),('计算机','设栈S和队列Q的初始状态均为空，元素abcdefg依次进入栈S。若每个元素出栈后立即进入队列Q，且7个元素出队的顺序是bdcfeag，则栈S的容量至少是 A.1 B.2 C.3 D.4','D','002');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `name` varchar(20) NOT NULL,
  `userID` varchar(6) NOT NULL,
  `iphoneNum` char(11) NOT NULL,
  `userPW` varchar(6) NOT NULL,
  `motto` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`name`,`userID`,`iphoneNum`,`userPW`,`motto`,`subject`) values ('小赵','001','15224853695','111111','没啥可说的','软件工程'),('小黄','002','25486325951','111111','你好，加油','计算机');

/*Table structure for table `zehngzhi` */

DROP TABLE IF EXISTS `zehngzhi`;

CREATE TABLE `zehngzhi` (
  `subject` varchar(10) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `zehngzhi` */

insert  into `zehngzhi`(`subject`,`content`) values ('政治中后期复习','肖肖秀荣的形势与政策，肖四肖八，徐涛的背诵小黄书'),('政治前期复习','肖秀荣精讲精练+1000题，至少看三遍，做三遍题');

/*Table structure for table `zhuanyeke` */

DROP TABLE IF EXISTS `zhuanyeke`;

CREATE TABLE `zhuanyeke` (
  `subject` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `zhuanyeke` */

insert  into `zhuanyeke`(`subject`,`content`) values ('数据结构','这门课程是统考408初试考试四门专业课科目之一，也是大多数高校考研计算机初试必考科目，可见数据结构这门课在考研计算机初试中的重要地位。这门课程在计算机考研的考试范围中也是非常重要的，而《数据结构》的重点章节是线性表、树、图、查找和排序。参考书目是《数据结构C语言版》《数据结构精讲和习题讲解》（严蔚敏），大家可以结合这两本书进行知识点的学习，和一些习题的练习'),('计算机组成原理','《计算机组成原理》的重点在数据的表示和运算、存储器层次结构、指令系统、中央处理器(CPU)、总线、输入输出(I/O)系统。参考书目是《计算机组成原理(第2版)》(唐朔飞主编)，《计算机组成原理-学习指导与习题解答》。复习时要掌握具体的知识体系，总结出自己的知识框架，多做练习。');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
