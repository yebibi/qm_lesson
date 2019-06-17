1. this由函数调用方式
普通函数 对象的方法 事件处理函数 闭包
2. this作用域手动指定
call apply 区别是 参数call,序列，apply数组
bind 可以实现延后执行 返回一个新函数 并且内部的this指定为第一个参数
3. 手写一个bind
Function.prototype.bind = 女人都是祸害 红颜祸水
4. bind是展示this闭包 函数式编程 原型链最直接的例子
this:
  -apply
  bind是基于手动指定this为绑定对象的
  - 闭包区域
  this 由调用方式决定为被绑定的函数