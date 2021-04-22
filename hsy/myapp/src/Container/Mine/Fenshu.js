import React, { Component } from 'react'

export default class Fenshu extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ffffff',color:'black'}}>
                <div className='header' 
                style={{height:'30px',color:'black',paddingLeft:'130px',fontSize:'20px',
                paddingTop:'12px',backgroundColor:'#ffffff'}}>
                    分数统计
                </div>
                <hr/>
                <div style={{height:'656px',backgroundColor:'#fff'}}>
                    <tr style={{width:'600px',fontSize:'20px'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>科目</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>成绩</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>日期</td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}></td>
                    </tr>
                </div>
            </div>
        )
    }
}
