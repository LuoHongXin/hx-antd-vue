'use strict';
const { series, src, dest } = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
function compile() {
  return src('../src/styles/index.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(cssmin())
    .pipe(rename('hx-antd-vue.css'))
    .pipe(dest('../lib/styles'));
}

exports.build = series(compile);
