const koa = require('koa');
const app = new koa();
const route = require('koa-route');
var serve = require('koa-static-server')

const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: '../views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app: app,
});

app.use(serve({
  rootDir: '../public-gen'
}));

app.use(route.get('/', ctx => {
    ctx.render('index');
}));

module.exports = app;
