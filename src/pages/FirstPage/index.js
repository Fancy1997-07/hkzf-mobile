import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'


export default class FirstPage extends React.Component {
  state = {
    // 轮播图状态数据
    data: ['1', '2', '3'],
    swipers: []
  }

  // 获取轮播图的数据
  async getSwipers(){
    const res = await axios.get('http://localhost:8080/home/swiper')
    console.log('轮播图数据为：', res)
    this.setState({
      swipers: res.data.body
    })
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        // 图片的名称
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    this.getSwipers()
  }
  render() {
    return (
      <div className="index">
        <Carousel
          autoplay={true}
          infinite
          autoplayInterval={3000}
          // 轮播图切换的时候的回调函数
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // 切换面板后的回调函数
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: 170 }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
      </div>
    );
  }
}