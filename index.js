var koa = require('koa'),
  app = koa(),
  Tickr = require('tickr'),
  tickr = new Tickr(new Date(), {tick: 10000}),
  data = require('./app/data/default.js');

console.log('Welcome to BrowserGame');
// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *() {
  this.body = 'hello world ' + tickr.getCurrentTick() + data[0].name;
  console.log(data);
});

app.listen(3000);
