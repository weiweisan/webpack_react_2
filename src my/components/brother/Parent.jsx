// 另外一种写法
/* import React from 'react'
class Parent extends React.Component{
    render(){
        return <div>
            </div>
    }
} */
import React,{Component} from 'react'

import Brother1 from './Brother1'
import Brother2 from './Brother2'

class Parent extends Component {
    render(){
        return <div>
                <Brother1 />
                <hr />
                <Brother2 />
            </div>
    }
}

export default Parent