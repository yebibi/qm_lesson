const Koa = require('koa');
const app = new Koa();
app.use(async(ctx,next)=>{
  const start = Date.now();
  // ctx.body = `hello koa`;
  await next();
  const end = Date.now();
  ctx.set('X-Response-time',`${end-start}ms`);
  console.log('spend',`${end-start}ms`);
  
})
app.use(async(ctx)=>{
  ctx.body = `hello koa`;
})
app.listen(8080,()=>{
  console.log('server is running 8080');
  
})