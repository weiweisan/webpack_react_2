import React from "react";
import "./App.less";

// 样式
const addStyle = {
  color: "green",
  fontSize: 50
};

const addStyle2 = {
  color: "hotpink",
  fontSize: 30
};

const addStyle3 = {
  color: "red",
  fontSize: 50
};

// 导入组件
import NoStateComponent from "@/NoStateComponent";
import StateComponent from "@/StateComponent";
import Counter from "@/Counter";
import Grandpa from "@/Grandpa";
import Parent from "@/brother/Parent";
import Controlled from "@/Controlled"
import ConditionalAndFor from "@/ConditionalAndFor"
import MyCheckbox from "@/MyCheckbox"
import RefAndDom from "@/RefAndDom"
/* import Book from "@/book/Book" */
import Book from "@/book_networking/Book"

// 路由相关的组件
/* import Basic from "@/router/Basic" */

// 购物车案列
import Index from '@/cart/redux/views/Index.jsx'

// 热更新
import { hot } from 'react-hot-loader/root'

// 类组件(有状态组件)
class App extends React.Component {
  // render 是react的生命周期函数之一,用来渲染组件的内容
  getChildValue = data => {
    console.log("---- 我是父组件 ----");
    console.log(data);
  };

  render() {
    return <div>
        {/* 父组件给子组件传值 直接传递一个函数过去 */}
        {/* <Counter initCount={10} callback={this.getChildValue}/> */}
        {/* <Grandpa/> */}
        {/* <Parent/> */}
        {/* <StateComponent name="小明" age={38} sex="男" /> */}
        {/* <Controlled /> */}
        {/* <ConditionalAndFor/> */}
        {/* <MyCheckbox/> */}
        {/* <RefAndDom/> */}
        {/* <Book/> */}
        {/* <Basic /> */}
        <Index />
      </div>
    
  }


  render2() {
    return (
      <div id="app">
        hello React
        <div className="imgDiv" />
        <div>
          <span>
            <i className="iconfont icon-login_user" />
          </span>
        </div>
        <div>
          {/* 我是注释 */}
          <p style={{ color: "red", fontSize: 36 + "px" }}>我是</p>
          <p style={{ color: "pink", fontSize: 30 + "px" }}>这是一个寂寞的天</p>
          <p style={{ color: "#003300", fontSize: 50 + "px" }}>这是xxx</p>
          <p style={addStyle}>你也是一个好人</p>
          <p style={addStyle2}>下着有些伤心的雨</p>
          <p style={addStyle3}>这是啥玩意儿</p>
        </div>
      </div>
    );
  }
}

// 导出
export default hot(App)
