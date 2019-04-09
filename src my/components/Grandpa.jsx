import React, { Component } from "react";

import  PropTypes from 'prop-types'

class Grandsonchildson extends Component{
    static contextTypes = {
        myAge: PropTypes.number
    }

    render(){
        return <div>
                我是第五级,我的年龄是{this.context.myAge}
            </div>
    }
} 

class Grandsonchild extends Component{
    // 约定它传递过来的静态属性的值
    static contextTypes = {
        myValue: PropTypes.string
    }

    render(){
        return <div>
                我是第四级--{this.context.myValue}
                <Grandsonchildson/>
            </div>
    }
}

class Grandson extends Component{
    render(){
        return <div>
                我是第三级--{this.context.myValue}
                <Grandsonchild />
            </div>
    }
}

// 约定静态属性值的另外一种写法 不写static 属性名.属性值
// 固定写法 
Grandson.contextTypes = {
    myValue: PropTypes.string
}

class Parent extends Component{
    static contextTypes = {
        myValue:PropTypes.string
    }
    render(){
        return <div>
                我是第二级--{this.context.myValue}<br/>
                <Grandson />
            </div>
    }
}

class Grandpa extends Component {
    // 约定给孙子传递值的时候,属性名叫啥,以及它的类型是啥
    static childContextTypes = {
        // 约定它的属性类型
        myValue: PropTypes.string,
        myAge: PropTypes.number
    }
    // 这里和上面都是固定写法
    getChildContext() {
        return { 
            myValue: this.state.value,
            myAge: this.state.age
         };
    }

    constructor(){
        super()
        this.state = {
            value: '我是第一级的值',
            age:38
        }
    }

    changeValue = () => {
        this.setState({
            value: '121555'
        })
    }

    changeValue2 = () => {
        this.setState({
            value: '能看到吗'
        })
    }
    

    render(){
        return <div>
                我是第一级组件<br />
                <button onClick={this.changeValue}>我要更改</button>
                <button onClick={this.changeValue2}>再改一次</button>
                <button onClick={this.changeFunc}>我要传递函数</button>
                <Parent/>
            </div>
    }
}

export default Grandpa