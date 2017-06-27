'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listComponent = undefined;

var _preactCompat = require('preact-compat');

var _preactCompat2 = _interopRequireDefault(_preactCompat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listComponent = exports.listComponent = function listComponent(_ref) {
  var children = _ref.children;

  console.log('listSort.children', children);
  return _preactCompat2.default.createElement(
    'ul',
    null,
    children
  );
};