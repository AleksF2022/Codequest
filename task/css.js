const { src, dest } = require('gulp');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csso   = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const webpCss = require('gulp-webp-css');

// Обработка Css
const css = () => {
  return src(path.css.src, {sourcemaps: true})
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "CSS",
        message: error.message
      }))
    }))
    .pipe(concat('main.css'))
    .pipe(webpCss())
    .pipe(autoprefixer({overrideBrowsersList: ['last 10 version']}))
    .pipe(size({title: "main.css"}))
    .pipe(dest(path.css.dest, {sourcemaps: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(dest(path.css.dest, {sourcemaps: true}))
}
module.exports = css;