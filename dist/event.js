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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: pzzz 
 * @Date: 2017-12-13 14:18:22 
 * @Last Modified by: pzzz
 * @Last Modified time: 2017-12-14 17:12:12
 */

var CustomEvent = function () {
    function CustomEvent() {
        _classCallCheck(this, CustomEvent);

        this._events = {};
    }

    _createClass(CustomEvent, [{
        key: 'on',
        value: function on(type, fn, scope) {
            if (type + '' !== type) {
                console.error('The first argument type is requird as string! ');
                return this;
            }
            if (typeof fn != 'function') {
                console.error('The second argument type is requird as function! ');
                return this;
            }
            type = type.toLowerCase();
            if (!this._events[type]) {
                this._events[type] = [];
            }
            this._events[type].push(scope ? { fn: fn, scope: scope } : { fn: fn });
            return this;
        }
    }, {
        key: 'trigger',
        value: function trigger(type, data) {
            type = type.toLowerCase();
            var events = this._events[type];
            var fn = void 0;
            var event = Object.assign({ type: type, origin: this, cancle: false }, data);
            if (!events) {
                return event;
            }
            for (var i = 0; i < events.length; ++i) {
                fn = events[i].fn;
                event.scope = events[i].scope || this;
                fn.call(event.scope, event);
            }
            return event;
        }
    }, {
        key: 'off',
        value: function off(type, fn) {
            type = type.toLowerCase();
            var events = this._events[type];
            if (!events || !events.length) {
                return this;
            }
            if (!fn) {
                this._events[type] = events = [];
            } else {
                for (var i = 0; i < events.length; ++i) {
                    if (fn === events[i].fn) {
                        events.splice(i, 1);
                        --i;
                    }
                }
            }
            return this;
        }
    }, {
        key: 'one',
        value: function one(type, fn, scope) {
            var _this = this;
            var nfn = function nfn() {
                _this.off(type, nfn);
                fn.apply(scope || _this, arguments);
            };
            this.on(type, nfn, scope);
            return this;
        }
    }]);

    return CustomEvent;
}();

module.exports = CustomEvent;

/***/ })
/******/ ]);