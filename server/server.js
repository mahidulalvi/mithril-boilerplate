const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

/**
 * webpack-dev-middleware is a wrapper that will emit files processed
 * by webpack to a server.
 *
 * https://webpack.js.org/guides/development/#webpack-dev-middleware
 */
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () =>
  console.log('/nmithril-boilerplate listening on port 3000')
);
