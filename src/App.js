import React from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div>
        {/*
          默认路由匹配时，跳转到/ home 实现路由重定向到首页
        */}
        <Route path="/" exact render={()=><Redirect to="/home" />} ></Route>
        {/* 配置导航菜单 */}
        {/* <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/citylist">城市选择</Link></li>
        </ul> */}
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
