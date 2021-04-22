import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import imgURL from './1.jpg';
import { SearchBar, Button, WhiteSpace ,Card} from 'antd-mobile';
import {BrowserRouter as Router,Route,Redirect,Switch, Link} from 'react-router-dom';
export default class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
              data:['1','2','3']
            // data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <header>研</header>
                {/* <WingBlank> */}
                <SearchBar style={{height:'50px'}} placeholder="Search" maxLength={8} />
               
                <Carousel 
                    style={{
                        height:'250px',
                        width:"100%",
                        padding: '16px',
                        paddingTop:'30px',
                        background: 'rgb(218, 218, 218)',
                        overflow: 'hidden'}}
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => this.setState({ slideIndex: index })}
                    >
                    {this.state.data.map((val, index) => (
                        <a
                        key={val}
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                        >
                        <img
                            // src={`/${val}.jpg`}
                            // src={imgURL }
                            src={require('./'+val+'.jpg').default}
                            // src={require('./1.jpg').default}
                            alt=""
                            style={{height:'200px', width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: '200px' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                    



                <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="2021考研英语"
                            // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            thumb="https://scpic.chinaz.net/Files/pic/icons128/7877/f1.png"
                            extra={<span>经验分享</span>}
                        />
                        <Card.Body>
                            <div>考完到现在整整一个月啦，在家闲着也是闲着，所以给大家分享自己的备考经验，
                                经验不一定每个人都适用，但如果我的经验能够对你有所帮助，那也很好啦。
                                1.关于择校：我是二战跨考生，一战考的一所985综合院校，只招12人（一战头铁），差两分进复试...</div>
                        </Card.Body>
                        <Card.Footer content="考研人123456" extra={<div>2021-3-10</div>} />
                    </Card>
                <WhiteSpace size="lg" />
                <footer style={{marginBottom:'0',marginTop:'90px'}}>
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
                {/* </WingBlank> */}
            </div>
        )
    }
}

