import React, { Component } from "react";
import "./Book.css";

export default class Book extends Component {
  // 构造器
  constructor() {
    super();
    this.state = {
      bookName: "", // 定义输入框的值 默认为空
      editId: null, // 定义要修改书的id
      books: [
        { id: 1, name: "雪中悍刀行" },
        { id: 2, name: "剑来" },
        { id: 3, name: "求魔" },
        { id: 4, name: "平凡的世界" }
      ]
    };
  }

  // 获取图书 通过onChange事件监听 传入形参event 通过event.target.value拿到 
  handle = (event) => {
      //console.log(event.target)
      // 组件通过event.target来获取输入输入的值
      this.setState({
          bookName: event.target.value
      })
  }

  // 获取新增时输入框id的方法
  _getNewId = () => {
      // 遍历state中所有books的id 添加到新数组
      const ids = this.state.books.map(item => item.id)
      // 找出数组中最大的id 以下两种方式都可以
      //const maxId = Math.max(...ids) 
      const maxId = Math.max.apply(null,ids)
      //console.log(maxId)
     /*  maxId = maxId++
      return maxId  */
      return maxId + 1
  }

  // 新增修改
  addOrEdit = () => {
    // 进行非空判断,防止恶意点击,trim方法是去掉两边空格
    if (this.state.bookName.trim().length === 0) return
    // 判断state.editid中是否有值,有值就是编辑修改
    if (this.state.editId) {
        // 修改 // some循环找出满足条件的元素 
        this.state.books.some(book=>{
            if(book.id === this.state.editId){
                // 给找出来的元素 赋值 
                book.name = this.state.bookName
                // 结束循环的条件
                return true
            }
        })
        // 渲染到视图
        this.setState({
            books:this.state.books
        },()=>{
            // 在回调函数中清空
            this.state.editId = null
            this.setState({
                bookName:''
            })
        })
    } else {
        // 新增 
    // 把之前的数组和新增的数组利用展开运算符合并起来 
    const newArray = [
        ...this.state.books,{id:this._getNewId(),name:this.state.bookName}
    ]
    // 把更新后的新数组重新渲染到 视图
    this.setState({
        books: newArray
    },()=>{
        // 在回调函数中 把输入框中的值清空
        this.setState({
            bookName:''
        })
    })
  }
    }
    

  // 删除图书
  deleteBook = (event,id) => {
      event.preventDefault()
      //console.log(event,id)
      // 找出数组中 不等于这个id的值 添加到新的数组 
      const newArray = this.state.books.filter(item => item.id != id)
      // 把当前需要编辑的图书name更新到视图的输入框
      this.setState({
          books: newArray
      })
  }

  // 编辑图书
  editBook = (event,id) => {
    // 阻止a标签默认事件跳转
     event.preventDefault()
     // 要修改的图书 查找满足条件的目标元素
     const editBook = this.state.books.find(item => item.id === id)
     // 记录下要修改的id 赋值给模型中的
     this.state.editId = editBook.id
     // 视图
     this.setState({
         bookName:editBook.name
     })
  }


  render() {
    const { books, bookName } = this.state;
    return (
      <div>
        书名: <input type="text" onChange={this.handle} value={bookName} />
        &nbsp;<button onClick={this.addOrEdit}>新增/修改</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>书名</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {books.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                      {/* 要传递参数要使用箭头函数 */}
                    <a href="" onClick={() => {this.deleteBook(event,item.id)}}>删除</a>
                    <a href="" onClick={() => {this.editBook(event,item.id)}}>编辑</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
