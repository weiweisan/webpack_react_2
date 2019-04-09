import React, { Component } from "react";

/**
   * params
   *
   * type:checkbox,radio type的类型
   * values:[] 所要展示的值
   * svalues:[] 选中的值
   * name:名称
   * handle:onChange之后要处理的事件
   */
const CheckboxAndRadio = (props) => {
  
  const { type, svalues, handle, name, values } = props
  return <div>{/* // 无状态组件这里必须要加外面一定要套一个div */}
      {values.map((item, index) => {
        return <label key={index}>
            <input type={type} checked={svalues.includes(item)} value={item} onChange={handle} name={name} />{item}
          </label>
      })}
    </div> 
}

export default class MyCheckbox extends Component {
  constructor() {
    super();

    this.state = {
      name: "fruits", // 定义name属性
      values: ["apple", "orange", "banana", "mangosteen"], // 定义所有的项
      svalues: ["orange", "banana"], // 默认选中的项
      name4Radio: "gender", // 定义所有性别的项的name属性
      values4Radio: ["man", "woman", "neutral"], // 定义所有的性别项
      svalues4Radio: ["woman"] //定义默认选中的项
    };
  }

  // 这是爱吃水果的方法
  handle = event => {
    if (this.state.svalues.includes(event.target.value)) {
      // 之前包含有这个选项 ,删除掉
      const newArray = this.state.svalues.filter(
        item => item != event.target.value
      );
      // 把删除后的数组重新渲染到视图
      this.setState({
        svalues: newArray
      });
    } else {
      // 之前没有,加到数组中
      const newArray = [...this.state.svalues, event.target.value];
      this.setState({
        svalues: newArray
      });
    }
  };

  // 这是性别的方法
  gender = event => {
    this.setState({
      // 把事件监听到的value的值赋值给默认选中的项,其它项不满足条件自动为false
      svalues4Radio: [event.target.value]
    });
  };
  // 点击提交
  submit = () => {
    console.log(this.state.svalues);
    console.log(this.state.svalues4Radio);
  };

  render() {
    const {
      values,
      svalues,
      name,
      name4Radio,
      values4Radio,
      svalues4Radio
    } = this.state;

    const objRadio = {
        name:name4Radio,
        values:values4Radio,
        svalues:svalues4Radio,
        handle:this.gender,
        type:'radio'
    }
    return (
      <div>
        <form>
          爱吃:<CheckboxAndRadio type="checkbox" values={values} handle={this.handle} svalues={svalues} name={name}/>
         {/*  {values.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  value={item}
                  onChange={this.handle}
                  checked={svalues.includes(item)}
                  name={name}
                />
                {item}
              </label>
            )
          })} */}
          <br />
          性别:<CheckboxAndRadio {...objRadio} />
          {/*{values4Radio.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  value={item}
                  onChange={this.gender}
                  checked={svalues4Radio.includes(item)}
                  value={item}
                />
                {item}
              </label>
            )
          })}*/}
          <br />
          <input type="button" value="提交" onClick={this.submit} />
        </form>
      </div>
    );
  }
}
