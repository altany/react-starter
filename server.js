var express = require('express');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

/** Always serve the same HTML file for all requests */
app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl);
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});


/** Error Handling */
app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

/** Start server */
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
