const del = require('del');
const path = require('../config/path.js');
// Удаление директории public
const clear = () => {
  return del(path.root);
}
module.exports = clear;