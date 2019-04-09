import React,{ component } from "React";
// as 相当于起别名
/**
 * router: hashRouter #
            BrowserRouter history.pushState
            必须包裹在render函数的最外层
 *
 *  Router
        1.进行路由占位
        2.设置路由规则
 *

    Link 
        1.触发链接
 */
// as 相当于起别名
 import { HashRouter as Router,Router,Link} from "react-router-dom"

 const FoodList = () => {
     return <ul>
            <li>方便面</li>
            <li>1</li>
            <li>2</li>
     </ul>
 }

export default class Basic extends Component {
    render() {
        return <Router>
            <div>
                <Link to="/goodslist">新闻列表</Link>
            </div>
        </Router>
    }
}