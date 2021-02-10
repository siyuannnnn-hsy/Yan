import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import imgURL from './1.jpg';

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
                <WingBlank>
                    <Carousel 
                    style={{padding: '16px',
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
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}

