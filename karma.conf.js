'use strict';

const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    basePath: '',
    autoWatch: false,
    files: [
      'node_modules/babel-polyfill/browser.js',
      { pattern: 'tests/**/*.js' }
    ],
    client: {
      captureConsole: true
    },
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'tests/**/*.js': ['webpack']
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
      ...webpackConfig,
      entry: null
    },
    webpackMiddleware: {
      noInfo: true
    },
    browserNoActivityTimeout: 60000
  });
};
