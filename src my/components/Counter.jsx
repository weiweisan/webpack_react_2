import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  // 要拿到值要通过构造器
  constructor(props) {
    // 固定写法
    super();

    // 只能用不能改
    this.state = {
      count: props.initCount
    };
  }

  // 加了static的属性,就是静态属性,访问的时候,必须使用类名.属性
  static propTypes = {
    // 要给它定义静态属性 也可以设置默认值
    initCount: PropTypes.number,
    callback: PropTypes.func
  };

  // 设置默认值
  static defaultProps = {
    initCount: 100
  };

  add = () => {
    // 这里是异步执行的 所以要通过回调拿到结果
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        // 给它的回调函数 传参 并且返回给它的父组件
        this.props.callback(this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        我是子组件...
        <br />
        {this.state.count}&nbsp;&nbsp;<button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default Counter;