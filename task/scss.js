const { src, dest } = require('gulp');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const csso   = require('gulp-csso');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const size = require('gulp-size');
const webpCss = require('gulp-webp-css');

// Обработка SCSS
const scss = () => {
  return src(path.scss.src, {sourcemaps: true})
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SCSS",
        message: error.message
      }))
    }))
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer({overrideBrowsersList: ['last 10 version']}))
    .pipe(size({title: "main.css"}))
    .pipe(dest(path.scss.dest, {sourcemaps: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(dest(path.scss.dest, {sourcemaps: true}))
}
module.exports = scss;