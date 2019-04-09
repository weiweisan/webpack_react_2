import React from 'react'
import bus from './bus'

class Brother2 extends React.Component {
    constructor(){
        super()
        // 创建一个空对象 方便保存兄弟组件传过来数据
        this.state = {}
    }
    // 生命周期钩子
    componentDidMount(){
        console.log("---componentDidMount---")
        bus.on('myevent',data=>{
            this.setState({
                name:data.name,
                address:data.address
            })
        })
    }
    render(){
        console.log("--- render ---")
        const {name,address} = this.state
        return <div>
                我是兄弟组件2 --- {name}---{address}
            </div>
    }
}

export default Brother2