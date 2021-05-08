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
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state={
        userID:'',
        content:'',
        contentList:[],
        num:[],
        num2:[],
        tikuList:[],
        num3:[],
        qikanSub:[],
        qikanList:[],
        // dengluId:this.props.match.params.dengluId
    }
}
componentDidMount(){
    console.log(this.props.match.params.userID);
    this.setState({
        userID:this.props.match.params.userID
    })


    fetch("http://localhost:8081/listrenwu")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                    this.setState({
                        content:res[i].content
                }) 
                console.log(res[i]);
                for(var i = 0;i<res.length;i++){
                    this.setState({
                        contentList:[...this.state.contentList,res[i].content],
                        num:[...this.state.num,i]
                    })
                }
                console.log(this.state.contentList)
                console.log(this.state.num2)
            }
            // console.log(this.state.culling)
        })
        fetch("http://localhost:8081/listtiku")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                    this.setState({
                        content:res[i].content
                }) 
                console.log(res[i]);
                for(var i = 0;i<res.length;i++){
                    this.setState({
                        tikuList:[...this.state.tikuList,res[i].content],
                        num2:[...this.state.num2,i]
                    })
                }
                console.log(this.state.tikuList)
                console.log(this.state.num2)
            }
            // console.log(this.state.culling)
        })
        fetch("http://localhost:8081/listqikan")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                    this.setState({
                        content:res[i].content
                }) 
                console.log(res[i]);
                for(var i = 0;i<res.length;i++){
                    this.setState({
                      qikanSub:[...this.state.qikanSub,res[i].subject],
                        qikanList:[...this.state.qikanList,res[i].content],
                        num3:[...this.state.num3,i]
                    })
                }
                console.log(this.state.tikuList)
                console.log(this.state.num2)
            }
            // console.log(this.state.culling)
        })
}
    render() {
        return (
            <div>
              <header>研</header>
      <Tabs tabs={tabs}
        // initialPage={1}
        tabBarActiveTextColor={"gray"}
        tabBarInactiveTextColor={'#aaa'}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ display: 'flex',height:'300px',color:'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
          {/* 每日任务 */}
          {
              this.state.num.map((i)=>{
                return(
                  <div >
                    <p>{this.state.contentList[i]}、</p>
                    {/* <hr></hr> */}
                  </div>
                )
                })
            }
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
        <div style={{marginTop:'20px',backgroundColor: '#fff'}}>
            {
              this.state.num2.map((i)=>{
                return(
                  <div >
                    <p>{this.state.num2[i]+1}、{this.state.tikuList[i]}</p>
                    {/* <hr></hr> */}
                  </div>
                )
                })
            }
            
          
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
                        <div  style={{backgroundColor:'#fff'}}>
                        {
                          this.state.num3.map((i)=>{
                            return(
                              <div style={{backgroundColor:'#fff'}}>
                                <p>{this.state.num3[i]}+1、{this.state.qikanSub[i]}{this.state.qikanList[i]}</p>
                                {/* <hr></hr> */}
                              </div>
                            )
                            })
                        }
                        </div>
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
        <Link to={'/Home/'+this.state.userID} className='base-footer'>
          <i className="iconfont iconlinggan" style={{fontSize:'30px'}}></i>  
        </Link>
        <Link to={'/Study/'+this.state.userID} className='base-footer'>
          <i className="iconfont iconxuexi" style={{fontSize:'30px'}}></i>
        </Link>
        <Link to={'/Mine/'+this.state.userID} className='base-footer'>
          <i className="iconfont iconwode1" style={{fontSize:'30px'}}></i>
        </Link>
        </footer> 
    </div>
  
        )
    }
}
