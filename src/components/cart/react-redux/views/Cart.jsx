import React, { Component } from "react";
import { Table, Button, InputNumber } from "element-react";

import { connect } from "react-redux";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          label: "名字",
          prop: "name"
        },
        {
          label: "图片",
          render: row => {
            return (
              <div style={{ width: 100, height: 100 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={row.img_url}
                  alt=""
                />
              </div>
            );
          }
        },
        {
          label: "数量",
          render: row => {
            return (
              <InputNumber
                size="small"
                defaultValue={row.num}
                value={row.num}
                onChange={this.update.bind(this.row)}
                min="1"
              />
            );
          }
        },
        {
          label: "单价",
          prop: "price"
        },
        {
          label: "总价",
          render: row => {
            return <span>{row.num * row.price}</span>;
          }
        },
        {
          label: "操作",
          render: row => {
            return (
              <div>
                <Button
                  onClick={this.onDelete.bind(this, row.id)}
                  type="danger"
                >
                  删除
                </Button>
              </div>
            );
          }
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Table
          style={{ width: "100%" }}
          columns={this.state.columns}
          data={this.props.goodsList}
        />
        {/* 总价 */}
        <div style={{ marginLeft: 5 }}>
          <p>总价：{this.props.totalPrice}</p>
          <Button type="success">总价</Button>
        </div>
      </div>
    );
  }

  // 不能直接在行内写方法 抽出来 外面写
  update = (goods, value) => {
    const newArray = JSON.parse(JSON.stringify(goods));
    newArray.num = value;

    this.props.updateCart(newArray);
  };

  onDelete = id => {
    this.props.deleteCart(id);
  };
}

// 这是去仓库中去获取数据
const mapStateToProps = state => {
  const calcTotalPrice = () => {
    totalPrice = 0;
    state.forEach(item => {
      totalPrice += state.num;
    });

    return totalPrice;
  };
  return {
    goodsList: state,
    totalPrice: calcTotalPrice()
  };
};

// 这是去仓库中操作数据(增删改)
const mapDisatchToProps = dispatch => {
  return {
    // 触发修改的dispatch
    updateCart(goods) {
      dispatch({
        type: "UPDATE_CART",
        goods
      });
    },

    // 触发删除的dispatch
    deleteCart(id) {
      dispatch({
        type: "DELETE_CART",
        id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(Cart);
