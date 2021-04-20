import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

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
          学习期刊
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
    </div>
  
        )
    }
}
