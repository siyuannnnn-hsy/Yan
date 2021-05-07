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
                    >分数统计
                </NavBar>
                {/* <div style={}></div> */}
                {/* <div style={{height:'100px',width:'100px',borderRadius:'50px',backgroundColor:'#ffffff',marginTop:'40px',marginLeft:'120px'}}>

                </div> */}
            </div>
        )
    }
}
