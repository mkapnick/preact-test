const koa = require('koa');
const app = new koa();

const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: '../views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app: app,
});

app.use(ctx => {
    ctx.render('index');
});

module.exports = app;
