import React, { Component } from "react";
import "./Book.css";

export default class Book extends Component {
  // 构造器
  constructor() {
    super();
    this.state = {
      bookName: "", // 定义输入框的值 默认为空
      editId: null, // 定义要修改书的id
      books: [] // 现在要从网络路径获取了
    };
  }

  // 获取图书 通过onChange事件监听 传入形参event 通过event.target.value拿到
  handle = event => {
    //console.log(event.target)
    // 组件通过event.target来获取输入输入的值
    this.setState({
      bookName: event.target.value
    });
  };

  // 获取新增时输入框id的方法
  _getNewId = () => {
    // 遍历state中所有books的id 添加到新数组
    const ids = this.state.books.map(item => item.id);
    // 找出数组中最大的id 以下两种方式都可以
    //const maxId = Math.max(...ids)
    const maxId = Math.max.apply(null, ids);
    //console.log(maxId)
    /*  maxId = maxId++
      return maxId  */
    return maxId + 1;
  };

  // 新增修改
  addOrEdit = () => {
    // 进行非空判断,防止恶意点击,trim方法是去掉两边空格
    if (this.state.bookName.trim().length === 0) return;
    // 判断state.editid中是否有值,有值就是编辑修改
    if (this.state.editId) {
      // 修改
      fetch(`http://localhost:8080/book/${this.state.editId}`, {
        method: "PUT",
        headers: {
          // 请求头 JSON格式
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: this.state.bookName })
      })
        .then(response => response.json())
        .then(data => {
          this.loadBooksData();
        });
    } else {
      // 新增
      console.log(this.state.bookName);
      fetch("http://localhost:8080/book", {
        method: "POST", // 请求方法
        headers: {
          // 请求头 // 设置这种为键值对的 application/x-www-form-urlencoded
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=" + this.state.bookName
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

          this.loadBooksData();
        });
    }
  };

  // 删除图书
  deleteBook = (event, id) => {
    event.preventDefault();
    //console.log(event,id)
    
    fetch(`http://localhost:8080/book/${id}`,{
      method:'DELETE'
    }).then(response=>{response.json()}).then(data=>{
      this.loadBooksData()
    })
  };

  // 编辑图书
  editBook = (event, id) => {
    // 阻止a标签默认事件跳转
    event.preventDefault();

    // 要根据id去查询图书 直接使用的逻辑不严谨
    fetch(`http://localhost:8080/book/${id}`)
      .then(response => response.json())
      .then(data => {
        this.state.editId = data.id;

        // 视图
        this.setState({
          bookName: data.name
        });
      });
  };

  componentWillMount() {
    this.loadBooksData();
  }

  loadBooksData = () => {
    fetch("http://localhost:8080/book", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          books: data
        });
      });
  };

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
                    <a
                      href=""
                      onClick={() => {
                        this.deleteBook(event, item.id);
                      }}
                    >
                      删除
                    </a>
                    <a
                      href=""
                      onClick={() => {
                        this.editBook(event, item.id);
                      }}
                    >
                      编辑
                    </a>
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
