import React, { Component } from 'react';
import { NavBar, Icon,WingBlank} from 'antd-mobile';

export default class Lishi extends Component {
    render() {
        return (
            <div>
                <header>研</header>
                {/* <div className='header'
                 style={{height:'30px',color:'black',paddingLeft:'130px',fontSize:'20px',paddingTop:'12px'
                 ,backgroundColor:'#ffffff'}}
                 icon={<Icon type="left" />}
                    
                 onLeftClick={() => {window.location='/Mine'}}
                 >
                    历史课程
                </div> */}
                <NavBar
                    className='header' style={{height:'30px',color:'black',
                    // paddingLeft:'130px',
                    fontSize:'20px',paddingTop:'12px',backgroundColor:'#ffffff'}}
                    icon={<Icon type="left" />}
                    
                    onLeftClick={() => {window.location='/Mine'}}
                    >分数统计
                </NavBar>
                {/* <div style={}></div> */}
                {/* <div style={{height:'100px',width:'100px',borderRadius:'50px',backgroundColor:'#ffffff',marginTop:'40px',marginLeft:'120px'}}>

                </div> */}
            </div>
        )
    }
}
