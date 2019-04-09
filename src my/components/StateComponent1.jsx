/* import React,{Component} from 'react'

// 有状态组件 也可以叫类组件 
export default class StateComponent extends Component{
    // 构造器
    constructor (){
        super()
        // 相当于小程序中的data或是vue的data函数
        this.state = {
            name: '小明',
            age: 35,
            address: '深圳'
        }
    }

    render(){
        // 结构赋值
        const {age,address} = this.state
        return (
            <div>
                我是有状态组件<br/>
                姓名 ---- {this.state.name}<br/>
                年龄 ---- {age}<br/>
                地址 ---- {address} 
            </div>
        )
    }
} */

// 第二种写法 
/* import React from 'react'
// 有状态 组件 也可以叫类组件
export default class StateComponent extends React.Component{
    // 构造器 
    constructor (){
        super()
        // 相当于小程序中的data或是vue的data函数
        this.state = {
            name: '小明',
            age: 35,
            address: '深圳'
        }
    }
    render(){
        // 解构赋值
        const {age,address} = this.state
        return (
            <div>
                我是有状态组件的第二种写法<br />
                姓名 ---- {this.state.name} <br />
                年龄 ---- {age} <br />
                地址 ---- {address} <br />
            </div>
        )
    }
} */
// 有状态组件 也可以间 类组件
import React from 'react'
export default class StateComponent extends React.Component{
    // 构造器 
    constructor (){
        super() 
        // 相当于小程序中的data或是vue的data函数
        this.state = {
            name: '小明',
            age: 35,
            address: '深圳'
        }
    }
    render(){
        const {name,age,address} = this.state
        return (
            <div>
                我是有状态的组件 <br />
                名字 -- {name} <br />
                年龄 -- {age} <br />
                地址 -- {address} 
            </div>
        )
    }
}
