const {src, dest} = require('gulp');
const fileinclude = require('gulp-file-include');
function html() {
  return src('./src/html/*.html')
  .pipe(fileinclude())
  .pipe(dest('./public'))
  
}
exports.html = html;