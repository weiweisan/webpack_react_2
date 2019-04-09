// 这个包会在react中自带 不用自己手动安装
import {EventEmitter} from 'events'

// 把创建的实例对象赋值给bus bus相当于是EventEmitter的实例对象
const bus = new EventEmitter()


export default bus