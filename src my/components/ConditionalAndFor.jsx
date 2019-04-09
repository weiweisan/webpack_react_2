import React, { Component } from "react";

export default class ConditionalAndFor extends Component {
  // 构造器和super
  constructor() {
    super();

    this.state = {
      isLogin: true,
      name: "战三",
      persons: [
        { id: 1, name: "张无忌", skill: "乾坤大挪移" },
        { id: 2, name: "张三丰", skill: "太极" },
        { id: 3, name: "周芷若", skill: "九阴白骨抓" },
        { id: 4, name: "梅超风", skill: "九阴白骨抓" }
      ]
    };
  }

  render() {
    /* // if 条件判断
        if(this.state.isLogin){
            return <div>
                    验证成功可以登录
                </div>
        } else {
            return <div>
                    请去登录...
                </div>
        } */

    //三目运算 或者 三元运算
    /*  return (
            <div>{this.state.isLogin ? <div>验证成功</div> : <div>请去登录</div>}</div>
        ) */

    /*  //这里可以这样使用if
        let renderSpan = null 
        if (this.state.name){
            renderSpan = <span>{this.state.name}</span>
        } */

    return (
      <div>
        {this.state.name && <span>{this.state.name}</span>}
        {/* {renderSpan} */}

        <ul>
          {this.state.persons.map(item => {
            return (
              <li key={item.id}>
                {item.name} --- {item.skill}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
