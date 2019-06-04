## koa 中间件 middleWare 
app.use(middleWare);
next 下一个中间件 
每次use 都会注册一个中间件 
[middleWare1,middleWare2]
1. async函数  
2. 洋葱模型 ： 一层一层往最里面执行，最后一个中间件执行完了，
一层往外冒泡执行剩余的代码。
3. 解耦：每一个中间件负责一件事
以X开头：自定义响应头

## koa 第三方中间件
koa ctx 就是req+res组成的对象
ctx ：{
  req：{}，
  res：{}，
}
koa-views
接着拓展 ctx，接着往ctx上面塞东西
ctx ：{
  req：{}，
  res：{}，
  render：（）=>{}
}
## 
package.json 项目描述 
依赖 npm install   下来的文件
## ejs
<%= %> 原样输出
<%= %> 解析html
<% %>解析 JS