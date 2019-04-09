import React from 'react'

import bus from './bus'

class Brother1 extends React.Component {
    sendValueToBrother2 = () => {
        // react兄弟之间的传值没有$ 直接emit 就行了
        bus.emit('myevent',{
            name:'小明',
            address:'深圳'
        })
    }

    render(){
        return <div>
                我是兄弟1组件&nbsp;<button onClick={this.sendValueToBrother2}>我要传值给兄弟组件2</button>
            </div>
    }
}

export default Brother1