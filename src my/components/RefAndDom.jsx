import React,{Component} from 'react'

class RefAndDom extends Component {
    // 构造器 这里面获取state
    constructor(){
        super()
        // ref在react中的新新写法 先定义
        this.inputRef = React.createRef()
        this.fileRef = React.createRef()
        // 预览图片,默认为null 
        this.state = {
            imgPath:null
        }
    }

    render(){
        const {imgPath} = this.state
        return (
            <div>
                {/* 1.0 让input自动获得焦点 */}
                {/* 在属性中设置ref */}
                <input ref={this.inputRef} name="test" type="text"/>
                <br />
                {/* 2.0 文件上传 */}
                文件上传:
                <input type="file" ref={this.fileRef } />
                <br/>
                <input type="button" onClick={this.upload} value="上传" /><br/><br/>
                {imgPath && <img style={{width:300,height:300}} src={imgPath} />}
            </div>
        )
    }

    upload = () => {
        // 获取用户选择的文件 使用ref
        const file = this.fileRef.current.files[0];
        if(file){
            // 使用xhr 进行 异步文件上传操作
            var xhr = new XMLHttpRequest();
            xhr.open("post","http://127.0.0.1:8888/uploadFile")
            // 设置请求体
            var formData = new FormData()
            formData.append("file",file) 
            // 发送
            xhr.send(formData)
            //响应
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200){
                    const res = xhr.responseText
                    const obj = JSON.parse(res)
    
                    this.setState({
                        imgPath:obj.path
                    })
                }
            }
        }
    }

    // 初次渲染完毕 
    componentDidMount(){
        /* 使用ref 这是react最新的方法  */
        /* this.inputRef.current.focus() */
    }
}

export default RefAndDom