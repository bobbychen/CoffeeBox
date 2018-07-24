require('babel-polyfill');
require('babel-register')({
    minified: true
});
require('./src/app');