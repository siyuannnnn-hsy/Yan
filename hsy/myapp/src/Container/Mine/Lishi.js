import React, { Component } from 'react';
import { NavBar, Icon,WingBlank} from 'antd-mobile';

export default class Lishi extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state={
            userID:''
            // dengluId:this.props.match.params.dengluId
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.userID);
        this.setState({
            userID:this.props.match.params.userID
        })
    }
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
                    
                    onLeftClick={() => {window.location='/Mine/'+this.state.userID}}
                    >历史成绩
                </NavBar>
                <hr/>
                <div style={{height:'656px',backgroundColor:'#fff'}}>
                    <tr style={{width:'600px',fontSize:'20px',color:'black'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>科目</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>成绩</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>日期</td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px',color:'black'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>英语</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>60</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>2021.03.30</td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px',color:'black'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>数学</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>90</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>2021.04.21</td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px',color:'black'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>专业课</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>90</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>2021.03.03</td>
                    </tr>
                    <tr style={{width:'600px',fontSize:'20px',color:'black'}}>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>数学</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>92</td>
                        <td style={{width:'100px',height:'30px', border: '1px solid #cad9ea',paddingLeft:'40px'}}>2021.04.02</td>
                    </tr>
                </div>
                {/* <div style={}></div> */}
                {/* <div style={{height:'100px',width:'100px',borderRadius:'50px',backgroundColor:'#ffffff',marginTop:'40px',marginLeft:'120px'}}>

                </div> */}
            </div>
        )
    }
}
