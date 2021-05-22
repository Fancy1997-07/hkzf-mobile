import React from 'react'
// 导入路由
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

import FirstPage from '../FirstPage'
import HouseList from '../HouseList'
import News from '../News'
import Profile from '../Profile'

import Dialog from '../../assets/images/dialog.png'
import UnDialog from '../../assets/images/dialog-unfocused.png'
import Egg from '../../assets/images/egg.png'
import UnEgg from '../../assets/images/egg-unfocused.png'
import Firework from '../../assets/images/firework.png'
import UnFirework from '../../assets/images/firework-unfocused.png'
import Windmill from '../../assets/images/windmill.png'
import UnWindmill from '../../assets/images/windmill-unfocused.png'
import './index.css'

const tabItems = [
  {
    title:'首页',
    icon: Egg,
    unfocuseIcon: UnEgg,
    path: '/home'
  },
  {
    title:'找房',
    icon: Firework,
    unfocuseIcon: UnFirework,
    path: '/home/houselist'
  },
  {
    title:'资讯',
    icon: Dialog,
    unfocuseIcon: UnDialog,
    path: '/home/news'
  },
  {
    title:'我的',
    icon: Windmill,
    unfocuseIcon: UnWindmill,
    path: '/home/profile'
  },
]

export default class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname,
    // 用于控制tabbar的展示和隐藏
  };

  renderTabBarItem(){
    return tabItems.map(item=><TabBar.Item
      title={item.title}
      key={item.title}
      icon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${item.unfocuseIcon}) center center /  21px 21px no-repeat`
      }}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${item.icon}) center center /  21px 21px no-repeat`
      }}
      />
      }
      selected={this.state.selectedTab === item.path}
      onPress={() => {
        this.setState({
          selectedTab: item.path,
        });
        this.props.history.push(item.path)
      }}
    >
    </TabBar.Item>)
  }

  render() {
    // console.log(this.props.location.pathname)
    return (<div className="home">
      {/* 渲染子路由 子路由必须在父路由路径的基础上进行修改*/}
      <Route path="/home/news" component={News}></Route>
      <Route path='/home/profile' component={Profile}></Route>
      <Route exact path="/home" component={FirstPage}></Route>
      <Route path='/home/houselist' component={HouseList}></Route>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        noRenderContent={true}
      >
        {this.renderTabBarItem()}
      </TabBar>
    </div>)
  }
}