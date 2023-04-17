const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
// Конфигурация
const path = require('./config/path.js');
// Задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
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
  // watch(path.html.watch, html).on('all', browserSync.reload);
  watch(['src/**/*.html'], html).on('all', browserSync.reload)
}
// == Callback функция - вывод в консоль
const consl = cb => {
  console.log('Вывод в консоль');
  cb();
}
// Экспорт
exports.html = html;
exports.watcher = watcher;
exports.consl = consl;
exports.clear = clear;
// Сборка
exports.dev = series(clear, html, parallel(watcher, server));