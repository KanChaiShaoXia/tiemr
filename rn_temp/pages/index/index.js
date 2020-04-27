module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styleModule = __webpack_require__(/*! ./style.module.scss */ "./src/pages/index/style.module.scss");

var _styleModule2 = _interopRequireDefault(_styleModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Taro = require('@tarojs/taro-rn');

var indexStyleSheet = require('./index_styles').default;

var _styleSheet = indexStyleSheet;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = [];

  if (classNameArr.length === 1) {
    style.push(_styleSheet[classNameArr[0].trim()]);
  } else {
    classNameArr.forEach(function (cls) {
      style.push(_styleSheet[cls.trim()]);
    });
  }

  return style;
}

var swiperList = [{
  title: "示例"
}, {
  title: "示例"
}, {
  title: "示例"
}];
var items = [{
  name: "itemsLeft",
  list: [{
    title: "示例",
    height: 250,
    active: false
  }, {
    title: "示例",
    height: 70,
    active: false
  }, {
    title: "示例",
    height: 120,
    active: false
  }]
}, {
  name: "itemsRight",
  list: [{
    title: "示例",
    height: 70,
    active: true
  }, {
    title: "示例",
    height: 70,
    active: false
  }, {
    title: "示例",
    height: 70,
    active: true
  }, {
    title: "示例",
    height: 210,
    active: false
  }]
}];
var Index = (_temp = _class = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _componentsRn.View,
        { style: _getStyle(_styleModule2.default.wrapper) },
        _react2.default.createElement(
          _componentsRn.View,
          null,
          _react2.default.createElement(
            _componentsRn.Swiper,
            { style: _getStyle(_styleModule2.default.swiperWrapper) },
            swiperList.map(function (item) {
              return _react2.default.createElement(
                _componentsRn.SwiperItem,
                { key: item.title, style: _getStyle(_styleModule2.default.swiperItem) },
                _react2.default.createElement(
                  _componentsRn.View,
                  null,
                  _react2.default.createElement(
                    _componentsRn.Text,
                    null,
                    item.title
                  )
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _componentsRn.View,
          { style: _getStyle(_styleModule2.default.listWrapper) },
          items.map(function (item) {
            return _react2.default.createElement(
              _componentsRn.View,
              { key: item.name, style: _getStyle(_styleModule2.default.itemLrR) },
              item.list.map(function (list) {
                return _react2.default.createElement(
                  _componentsRn.View,
                  { key: list.title, style: [_getStyle((0, _classnames2.default)(_styleModule2.default.block, list.active && _styleModule2.default.active)), {
                      height: list.height
                    }] },
                  _react2.default.createElement(
                    _componentsRn.Text,
                    { style: [_getStyle((0, _classnames2.default)(_styleModule2.default.title, list.active && _styleModule2.default.textActive)), {
                        lineHeight: list.height
                      }] },
                    list.title
                  )
                );
              })
            );
          })
        )
      );
    }
  }]);

  return Index;
}(_taroRn.Component), _class.config = {
  navigationBarTitleText: "A BOAT"
}, _temp);
exports.default = Index;

/***/ }),

/***/ "./src/pages/index/style.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/index/style.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"style-module__wrapper___2rmnN","swiperWrapper":"style-module__swiperWrapper___24-o5","swiperItem":"style-module__swiperItem___2p0SH","listWrapper":"style-module__listWrapper___3LfiF","itemLrR":"style-module__itemLrR___mTf6_","block":"style-module__block___1n5Hb","title":"style-module__title___24lQS","active":"style-module__active___8PYFY","textActive":"style-module__textActive___30yE2"};

/***/ }),

/***/ "@tarojs/components-rn":
/*!****************************************!*\
  !*** external "@tarojs/components-rn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/components-rn");

/***/ }),

/***/ "@tarojs/taro-rn":
/*!**********************************!*\
  !*** external "@tarojs/taro-rn" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-rn");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });