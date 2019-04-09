import React,{ Component } from "react"

class Controlled extends Component{
    //构造器和 super必须要写
    constructor(){
        super()

        this.state = {
            username:'admin',
            password:''
        }
    }
    // 这里面的效果类似于vue中的双向数据绑定 
    // 获取密码框输入的值 并且赋值给它的模型 用setStata
    handleChange = (event) => {
        console.log(event)
        this.setState({
            // es6中的属性名表达式 可以使用属性名表达式来简化代码的缩写
            [event.target.name]:event.target.value
           /*  [event.target.name]:event.target.value */
        })
    }
    /* handleChange2 = (event) => {
        this.setState({
            // 通过形参.target.value 拿到他更改后的value的值 赋值给新的密码 再更新的模型中 实现双向绑定 
            password:event.target.value
        })
    } */

    submit = () => {
        console.log(this.state)
    }
    // 受控组件是指给它绑定value的值 绑定到state 
    // 如果在事件里不写参数event 的话 输入框将不能输入 
    render(){
        return <div>
                受控组件<br/>
                <form>
                    用户名:<input name="username" onChange={()=>this.handleChange(event)} value={this.state.username} type="text" />{this.state.username}<br/>
                    密码:<input name="password" onChange={()=>this.handleChange(event)} value={this.state.password} type="text" />
                    <input type="button" onClick={this.submit} value="提交" />
                </form>
            </div>
    }
}

export default Controlled 