/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/                configurable: false,
                /******/                enumerable: true,
                /******/                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 3);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        exports.getMinInStack = getMinInStack;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Stack = function () {
            function Stack() {
                _classCallCheck(this, Stack);

                this.items = [];
                this.minStack = [];
            }

            _createClass(Stack, [{
                key: "push",
                value: function push(el) {
                    this.items.push(el);

                    if (this.minStack.length === 0) {
                        this.minStack.push(el);
                    } else if (el <= this.getMin()) {
                        this.minStack.push(el);
                    }
                }

                /*    push(el) {
                 this.items.push(el);
                 if (this.minStack.length === 0) {
                 this.minStack.push(el)
                 } else if (el <= this.getMin()) {
                 this.minStack.push(el)
                 } else if(el > this.getMin()) {
                 this.minStack.push(this.minStack.peek())
                 }
                 }*/

            }, {
                key: "pop",
                value: function pop() {
                    if (this.isEmpty()) return null;
                    var val = this.items.pop();
                    if (val === this.getMin()) {
                        this.minStack.pop();
                    }
                    return val;
                }

                /*    pop2() {
                 if (this.isEmpty()) return null;
                 let val = this.items.pop();
                 this.minStack.pop();
                 return val
                 }*/

            }, {
                key: "peek",
                value: function peek() {
                    if (this.isEmpty()) return null;
                    return this.items[this.items.length - 1];
                }
            }, {
                key: "getMin",
                value: function getMin() {
                    if (this.minStack.length === 0) return null;
                    return this.minStack[this.minStack.length - 1];
                }
            }, {
                key: "size",
                value: function size() {
                    return this.items.length;
                }
            }, {
                key: "isEmpty",
                value: function isEmpty() {
                    return this.items.length === 0;
                }
            }]);

            return Stack;
        }();

        var test1 = [4, 5, 2, 0, 1, 3];

        var stackMin = function stackMin(dataArray) {
            var stack = new Stack();
            for (var i = 0; i < stackMin.length; i++) {
                stack.push(dataArray[i]);
            }
            return stack.getMin();
        };

        function getMinInStack() {
            return stackMin(test1);
        }

        /***/
    }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.maxDistanceInArrays = maxDistanceInArrays;
        var test1 = [[-8, -7, -7, -5, 1, 1, 3, 4], [-2], [-10, -10, -7, 0, 1, 3], [2]]; // 14

        var test2 = [[1, 2, 3], [4, 5], [1, 2, 3]]; // 4

        var maxDistance = function maxDistance(arrays) {
            var maxDiff = 0;
            var maxVal = arrays[0][arrays[0].length - 1];
            var minVal = arrays[0][0];
            for (var i = 1; i < arrays.length; i++) {
                var curArr = arrays[i];
                maxDiff = Math.max(Math.abs(curArr[0] - maxVal), Math.abs(curArr[curArr.length - 1] - minVal), maxDiff);
                maxVal = Math.max(curArr[curArr.length - 1], maxVal);
                minVal = Math.min(curArr[0], minVal);
            }
            return maxDiff;
        };

        function maxDistanceInArrays() {
            return maxDistance(test1);
        }

        /***/
    }),
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        exports.twoStacksQueue = twoStacksQueue;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var TwoStacksQueue = function () {
            function TwoStacksQueue() {
                _classCallCheck(this, TwoStacksQueue);

                this.pushStack = [];
                this.popStack = [];
            }

            _createClass(TwoStacksQueue, [{
                key: "add",
                value: function add(el) {
                    this.pushStack.push(el);
                }
            }, {
                key: "poll",
                value: function poll() {
                    if (this.pushStack.isEmpty() && this.popStack.isEmpty()) {
                        return null;
                    }
                    while (!this.pushStack.isEmpty()) {
                        this.popStack.push(this.pushStack.pop());
                    }
                    return this.popStack.pop();
                }
            }, {
                key: "peek",
                value: function peek() {
                    if (this.pushStack.isEmpty() && this.popStack.isEmpty()) {
                        return null;
                    }
                    while (!this.pushStack.isEmpty()) {
                        this.popStack.push(this.pushStack.pop());
                    }
                    return this.popStack.peek();
                }
            }]);

            return TwoStacksQueue;
        }();

        var test1 = [1, 2, 3, 4, 5];

        function tryQueue(dataArray) {
            var queue = new TwoStacksQueue();
            for (var i = 0; i < queue.length; i++) {
                queue.add(dataArray[i]);
            }
            var result = [];
            for (var j = 0; j < queue.length; j++) {
                result.push(queue.pop());
            }
            return result;
        }

        function twoStacksQueue() {
            return tryQueue(test1);
        }

        /***/
    }),
    /* 3 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _getMinInStack = __webpack_require__(0);

        var _maxDistanceInArrays = __webpack_require__(1);

        var _twoStacksQueue = __webpack_require__(2);

        EvaluateTimeCost(_twoStacksQueue.twoStacksQueue);

        function EvaluateTimeCost(func) {
            var startTime = new Date();

            for (var i = 0; i < 10000; i++) {
                func();
            }
            var result = func();

            var endTime = new Date();
            var timerEl = document.getElementById('timer');
            timerEl.innerHTML = (endTime.getTime() - startTime.getTime()) / 10001;
            var resultEl = document.getElementById('result');
            resultEl.innerHTML = result;
        }

        /***/
    })
    /******/]);
//# sourceMappingURL=bundle.js.map