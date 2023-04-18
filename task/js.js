const { src, dest } = require('gulp');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');


// Обработка JavaScript
const js = () => {
  return src(path.js.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "JavaScript",
        message: error.message
      }))
    }))
    .pipe(webpack(app.webpack))
    .pipe(uglify())
    .pipe(dest(path.js.dest))
}
module.exports = js;