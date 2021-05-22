import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 导入antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css';
// 我们自己写的样式要放到组件库样式之后导入，这样自己写的全局样式才会生效，后面的样式会覆盖前边同名的样式
import './index.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
