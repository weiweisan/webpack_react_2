import React from "react";
export default class StateComponent extends React.Component {
  // 构造器
  constructor(props) {
    super();
    console.log(props);
    // 相当于小程序中的data或是vue的data函数
    this.state = {
      name: "小明",
      age: 35,
      address: "深圳"
    };
    //this.clickMe = this.clickMe.bind(this);
  }
  /* clickMe() {
    console.log("1111111111", this); // 如果要这么写,下面要绑定bind
  } */
  /* clickMe = () => {
    console.log("2222", this);  // 如果这里写箭头函数,下面可以不用绑定bind可以直接获取到this
  }; */

  // 这里通过形参可以拿到 name的属性
  /* clickMe2(e,name){
      console.log(name)
      console.log(this)
      console.log(e)

  } */

  clickMe2 = (e, name) => {
    //console.log(name);
    //console.log(this);
    //console.log(e);
    // 不能更改父组件传递过来的值 只能用
    // this.props.name = '小兰'
    //this.state.name = '小兰'

    // 异步的操作
    this.setState({
        name:"小兰"
    })
    console.log(this.state)
  };
  render() {
    const { name, age, address } = this.state;
    /* const {name,age:age2} = this.props */
    return (
      <div>
        我是有状态的组件 <br />
        名字 -- {name} <br />
        年龄 -- {age} <br />
        地址 -- {address}
         <br />
        {/* 姓名 -- {name}<br />
        年龄 -- {age2}<br />  */}
        {/* 无参数的情况 */}
        {/* <button onClick={this.clickMe.bind(this)}>更改值1</button> 上面可以用普通函数获取this的值 */}
        {/* <button onClick={this.clickMe}>更改值</button> 上面要写箭头函数才能获取到this */}
        {/* 有参数的情况 */}
        {/* 这种写法不行 */}
        {/* <button onClick={this.clickMe2}>更改值</button> */}
        <button
          onClick={() => {
            this.clickMe2(event, "小红")
          }}
        >
          更改值
        </button>
      </div>
    );
  }
}
