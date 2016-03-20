'use strict';

var gulp = require('gulp');
var plato = require('plato');

module.exports = function(options) {
  gulp.task('quality', function () {
    var options = {
       title: 'Maestro DIM quality reports'
    };
    var cb = function(){ console.log('>> Plato done'); }
    return plato.inspect('.tmp/serve/**/*.js', './reports/quality', options, 
cb);
  });
};
