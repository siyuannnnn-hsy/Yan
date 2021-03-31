import React, { Component } from 'react'

export default class Dingdan extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ffffff'}}>
                <div className='header' style={{height:'30px',color:'black',paddingLeft:'130px',fontSize:'20px',paddingTop:'12px',backgroundColor:'#ffffff'}}>
                    我的订单
                </div>
                {/* <div style={}></div> */}
                {/* <div style={{height:'100px',width:'100px',borderRadius:'50px',backgroundColor:'#ffffff',marginTop:'40px',marginLeft:'120px'}}>

                </div> */}
                <hr />
                <div style={{backgroundColor:'#ffffff',height:'50px',color:'black',fontSize:'25px',paddingLeft:'18px',paddingTop:'8px'}}>
                    已买课程 | 学习目标 | 优惠券
                </div>
                <hr/>
            </div>
        )
    }
}
