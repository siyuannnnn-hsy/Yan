import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {BrowserRouter as Router,Route,Redirect,Switch, Link} from 'react-router-dom';

const tabs = [
    { title: <Badge text={'3'}>每日任务</Badge> },
    { title: <Badge text={'今日(20)'}>背单词</Badge> },
    { title: <Badge dot>研题库</Badge> },
    { title: <Badge text={'3'}>学习期刊</Badge> },
  ];
  
  const tabs2 = [
    { title: '数学', sub: '1' },
    { title: '英语', sub: '2' },
    { title: '政治', sub: '3' },
    { title: '专业课', sub: '4' },
  ];
export default class Study extends Component {
    render() {
        return (
            <div>
              <header>研</header>
      <Tabs tabs={tabs}
        initialPage={1}
        tabBarActiveTextColor={"gray"}
        tabBarInactiveTextColor={'#aaa'}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
          {/* 每日任务 */}
          <div style={{width:'2200px',marginTop:'-200px',float:'left',backgroundColor:'#F5FAFA',height:'40px',fontSize:'15px'}}>
          学习英语，做阅读积累语感，背作文例句背单词
          </div>
          <div style={{width:'2000px',marginTop:'-100px',float:'left',marginLeft:'-385px',backgroundColor:'#F5FAFA',height:'40px',fontSize:'15px'}}>
          英语单词阅读两个作文
          </div>
          <div style={{width:'2000px',float:'left',marginLeft:'-350px',backgroundColor:'#F5FAFA',height:'40px',fontSize:'15px'}}>
          英语单词阅读两个作文
          </div>
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <div>
              <p>accord 使符合，相一致(with)</p>accord 使符合，相一致(with)
            {/* </div>    
            <div> */}
            <p style={{backgroundColor:'#fff'}}>account 记述，叙述</p>
            <p style={{backgroundColor:'#fff'}}>accumulate 积累，积攒，积聚</p>
            <p style={{backgroundColor:'#fff'}}>accurate 准确的 ，精确的 </p>
            <p style={{backgroundColor:'#fff'}}> accuse 指控，指责</p>
            <p style={{backgroundColor:'#fff'}}>accustom 使习惯于</p>
            <p style={{backgroundColor:'#fff'}}>acquaint 使认识，使了解</p>
            <p style={{backgroundColor:'#fff'}}>account 记述，叙述</p>
            <p style={{backgroundColor:'#fff'}}>accumulate 积累，积攒，积聚</p>
            {/* </div>
            <div> */}
              
            {/* </div>
            <div> */}
              
            {/* </div>
            <div> */}
             
            {/* </div>
            <div> */}
              
            {/* </div>
            <div> */}
              
            </div>
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <div>
        <p>
          1.为解决计算机与打印机之间速度不匹配的问题，通常设置一
          个打印数据缓冲区，主机将要输出的数据依次写入该缓冲区，而打印机则
          依次从该缓冲区中取出数据。该缓冲区的逻辑结构应该是
          </p>
          <p>
            A.栈 B.队列 C.树 D.图</p>   
           <p>
             2.设栈S和队列Q的初始状态均为空，元素abcdefg依
             次进入栈S。若每个元素出栈后立即进入队列Q，且7个元素出
             队的顺序是bdcfeag，则栈S的容量至少是
             </p>
          <p>
              A.1 B.2 C.3 D.4
             </p>
          <p>
          给定二叉树图所示。设N代表二叉树的根，
          L代表根结点的左子树，R代表根结点的右子树。若遍历后的结点
          序列为3，1，7，5，6，2，4，则其遍历方式是
          </p>
          <p>
           A.LRN B.NRL C.RLN D.RNL
          </p>
        </div>
                 
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          <div>
            <p>《发现》（Discover）杂志是世界闻名的科普杂志，杂志内容定位于
                        科学、技术和未来，具体栏目包括健康与医学、心灵与脑、
                        技术、空间、人类起源、生活世界、环境、物理与数学等等。</p>
            <p>《自然》（Nature）是世界上历史悠久的、
                        很有名望的科学杂志之一，是少数依然发表来自很多科学
                        领域的一手研究论文的杂志。在许多科学研究领域中，很多重要
                        、前沿的研究结果都是以短讯的形式发表在《自然》上。</p>
            <p>《国家地理》内容包括地理、科普、历史
                        、文化、实事、摄影等。部分文章经常涉及到自然环境、
                        森林砍伐、环境污染、全球暖化、濒危物种等，一系列的主题充分
                        满足读者对地理探索的好奇心。</p>
            {/* <p></p>
            <p></p> */}
          </div>
        </div>
      </Tabs>
      <WhiteSpace />
      <div style={{height:'30px',width:'100%',paddingTop:'20px',marginLeft:'10px',fontSize:'20px',color:'gray'}}>
            在学课程
      </div>
      <Tabs tabs={tabs2}
      tabBarActiveTextColor={"gray"}
      tabBarInactiveTextColor={'#aaa'}
        initialPage={1}
        tabBarPosition="bottom"
        renderTab={tab => <span>{tab.title}</span>}
      >
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          数学
        </div>
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          英语
        </div>
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          政治
        </div>
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          专业课
        </div>
      </Tabs>
      <WhiteSpace />
      <footer style={{marginBottom:'0',marginTop:'10px'}}>
        <Link to={'/'} className='base-footer'>
          <i className="iconfont iconlinggan" style={{fontSize:'30px'}}></i>  
        </Link>
        <Link to={'/Study'} className='base-footer'>
          <i className="iconfont iconxuexi" style={{fontSize:'30px'}}></i>
        </Link>
        <Link to={'/Mine'} className='base-footer'>
          <i className="iconfont iconwode1" style={{fontSize:'30px'}}></i>
        </Link>
        </footer> 
    </div>
  
        )
    }
}
