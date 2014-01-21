var koa = require('koa'),
  app = koa(),
  Tickr = require('tickr'),
  tickr = new Tickr(new Date(), {tick: 10000}),
  data = require('./app/data/default.js'),
  Player = require('./app/modules/player.js'),
  player = new Player(data);
  version = require('./package.json').version;

console.log('Welcome to BrowserGame', version);
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

app.use(function *(next) {
  var build = 'ready';
  if ( player.buildings[0].building ){
    build = player.buildings[0].building;
  }
  this.body = 'hello world ' +
    tickr.getCurrentTick() +
    ' ' +
    player.name +
    ' ' +
    player.buildings[0].name +
    ' ' +
    player.buildings[0].level +
    ' ' +
    build;
  console.log(player);
  player.buildings[0].build(tickr.getCurrentTick());
  yield next;
});

app.listen(3000);
