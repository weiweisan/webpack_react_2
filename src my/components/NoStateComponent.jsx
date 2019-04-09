// 导入react 
import React from 'react'

// 函数式组件/无状态组件
/* function NoStateComponent() {
    return <div>
        我是无状态组件
        </div>
}

export default NoStateComponent */

/* function NoStateComponent() {
    return <div>
            我是无状态组件
        </div>
}

export default NoStateComponent
 */
// 第二种写法
/* export default function NoStateComponent(){
    return <div>
            我是无状态组件
        </div>
} */

export default function NoStateComponent() {
    return (
        <div>
            我是无状态组件
        </div>
    )
}

// 第三种写法
/* export default function NoStateComponent(){
    return (
        <div> 我是无状态组件 </div>
    )
} */