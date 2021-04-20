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
              accord 使符合，相一致(with)
            </div>    
            <div>
              account 记述，叙述
            </div>
            <div>
              accumulate 积累，积攒，积聚
            </div>
            <div>
              accurate 准确的 ，精确的 
            </div>
            <div>
              accuse 指控，指责
            </div>
            <div>
              accustom 使习惯于
            </div>
            <div>
              acquaint 使认识，使了解
            </div>
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          研题库
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
