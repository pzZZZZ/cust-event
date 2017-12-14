# cust-event
## one Custom-event libs ## 一款支持自定义事件的工具函数模块
- [x] 支持es6 Commonjs模块化引入
# Install
```js
import cust from 'cust-event'
```
OR
```js
let cust =  require('cust-event')

```
# Usage
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