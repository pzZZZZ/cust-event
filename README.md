# 自定义事件库
- [x] 支持es6 Commonjs模块化引入


# 基本用法

## 引入模块
```js
import cust from 'cust-event'
```
OR
```js
let cust =  require('cust-event')

```
## 用法说明
### 绑定事件
```js
cust.on('event-name',function(){
    //callback
})
```
### 触发事件
```js
cust.trigger('event-name',function(){
    //callback
})
```
### 取消事件
```js
cust.off('event-name',function(){
    //callback
})
```
### 只触发一次
```js
cust.one('event-name',function(){
    //callback
})
```