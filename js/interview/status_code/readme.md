HTTP 协议 req response
状态码：http响应（response）中包含状态码 
浏览器 代理 proxy
1xx 请求已经正在处理，继续等待
2xx 请求已经成功处理掉了 200 OK
3xx 重定向  Location
4xx 用户出现错误（地址输错了）未权限 受限资源   404 not found 
5xx 服务器端出现错误
301 永久跳转，
用户 a.html www.xiaomi.com www.mi.com
告诉蜘蛛 
www.xiaomi.com/a.html 红米手机
废弃了，301 www.mi.com/a.html
与3xx 区别，永久跳转，告诉蜘蛛把记录更新掉
301 可以在改变状态码，不变，来展示理解
http://localhost:3000 301 永久跳转，
再次访问，浏览器有缓存，不需要再走服务器了，
302 临时跳转，不会告知蜘蛛 或在前端缓存