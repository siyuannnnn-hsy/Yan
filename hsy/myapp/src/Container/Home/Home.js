import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import imgURL from './1.jpg';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';


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
                {/* <WingBlank> */}
                    <Carousel 
                    style={{
                        height:'250px',
                        width:"100%",
                        padding: '16px',
                        paddingTop:'30px',
                        background: '#DEF1E5',
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
                    
                    <SearchBar style={{height:'50px',marginTop:'20px'}} placeholder="Search" maxLength={8} />
               
                {/* </WingBlank> */}
            </div>
        )
    }
}

