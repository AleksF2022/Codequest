const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
// Конфигурация
const path = require('./config/path.js');
// Задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
// const pug = require('./task/pug.js');
const scss = require('./task/scss.js');
// const css = require('./task/css.js');
const js = require('./task/js.js');
//  Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}
//  Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload)
  // watch(path.css.watch, css).on('all', browserSync.reload)
  // watch(['src/**/*.html'], html).on('all', browserSync.reload)
  // watch(['src/**/*.css'], css).on('all', browserSync.reload)
}
// == Callback функция - вывод в консоль
// const consl = cb => {
//   console.log('Вывод в консоль');
//   cb();
// }
// Экспорт
exports.html = html;
exports.js = js;
exports.scss = scss;
// exports.css = css;
// exports.pug = pug;
exports.watcher = watcher;
exports.clear = clear;
// exports.consl = consl;
// Сборка
exports.dev = series(clear,
  parallel(html, scss, js), parallel(watcher, server));