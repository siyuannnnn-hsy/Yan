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
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          Content of forth tab
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
          Content of first tab
        </div>
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          Content of third tab
        </div>
        <div style={{ display: 'flex',height:'250px',color:'gray', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          Content of forth tab
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  
        )
    }
}
