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
    return __webpack_require__(__webpack_require__.s = 7);
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

        exports.dequeueCatsAndDogsQueue = dequeueCatsAndDogsQueue;

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Pet = function () {
            function Pet(type) {
                _classCallCheck(this, Pet);

                this.type = type;
            }

            _createClass(Pet, [{
                key: "getPetType",
                value: function getPetType() {
                    return this.type;
                }
            }]);

            return Pet;
        }();

        var Dog = function (_Pet) {
            _inherits(Dog, _Pet);

            function Dog() {
                _classCallCheck(this, Dog);

                return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, "dog"));
            }

            return Dog;
        }(Pet);

        var Cat = function (_Pet2) {
            _inherits(Cat, _Pet2);

            function Cat() {
                _classCallCheck(this, Cat);

                return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, "cat"));
            }

            return Cat;
        }(Pet);

        var PetWithOrder = function () {
            function PetWithOrder(pet, count) {
                _classCallCheck(this, PetWithOrder);

                this.pet = pet;
                this.count = count;
            }

            _createClass(PetWithOrder, [{
                key: "getPet",
                value: function getPet() {
                    return this.pet;
                }
            }, {
                key: "getCount",
                value: function getCount() {
                    return this.count;
                }
            }, {
                key: "getPetType",
                value: function getPetType() {
                    return this.pet.getPetType();
                }
            }]);

            return PetWithOrder;
        }();

        var DogCatQueue = function () {
            function DogCatQueue() {
                _classCallCheck(this, DogCatQueue);

                this.dogQ = [];
                this.catQ = [];
                this.count = 0;
            }

            _createClass(DogCatQueue, [{
                key: "addPet",
                value: function addPet(pet) {
                    if (pet.getPetType() == "dog") {
                        this.dogQ.push(new PetWithOrder(pet, this.count++));
                    } else if (pet.getPetType() == "cat") {
                        this.catQ.push(new PetWithOrder(pet, this.count++));
                    }
                }
            }, {
                key: "pollDog",
                value: function pollDog() {
                    if (this.dogQ.length == 0) return null;
                    return this.dogQ.pop().getPet();
                }
            }, {
                key: "pollCat",
                value: function pollCat() {
                    if (this.catQ.length == 0) return null;
                    return this.catQ.pop().getPet();
                }
            }, {
                key: "pollAll",
                value: function pollAll() {
                    if (this.catQ.length == 0 && this.dogQ.length == 0) return null;
                    if (this.catQ.length == 0) return this.dogQ.pop().getPet();
                    if (this.dogQ.length == 0) return this.catQ.pop().getPet();

                    if (this.catQ[0].getCount() < this.dogQ[0].getCount()) {
                        return this.catQ.shift().getPet();
                    } else {
                        return this.dogQ.shift().getPet();
                    }
                }
            }]);

            return DogCatQueue;
        }();

        var test1 = ["dog", "dog", "cat", "cat", "dog", "cat"];

        var createQ = function createQ(petArray) {
            var queue = new DogCatQueue();
            for (var i in petArray) {
                queue.addPet(new Pet(petArray[i]));
            }
            return queue;
        };

        function dequeueCatsAndDogsQueue() {
            var queue = createQ(test1);
            var allResult = [];
            var catResult = [];
            var dogResult = [];

            var len = queue.dogQ.length + queue.catQ.length;
            for (var i = 0; i < len; i++) {
                allResult.push(queue.pollAll().getPetType());
            }
            for (var _i = 0; _i < queue.dogQ.length; _i++) {
                dogResult.push(queue.pollDog().getPetType());
            }
            for (var _i2 = 0; _i2 < queue.catQ.length; _i2++) {
                catResult.push(queue.pollCat().getPetType());
            }

            return allResult;
        }

        /***/
    }),
    /* 1 */
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
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.testHanoi = testHanoi;
        var hanoi = function hanoi(nums, origin, aux, dest, log) {
            var moves = [];
            if (nums == 1) {
                log.push("Move disk 1 from " + origin + " to " + dest);
                return;
            }
            hanoi(nums - 1, origin, dest, aux, log);
            log.push("Move dist " + nums + " from " + origin + " to " + dest);
            hanoi(nums - 1, aux, origin, dest, log);
            return log;
        };

        var test1 = 3;
        var test2 = 5;

        function testHanoi() {
            hanoi(test1, "A", "B", "C", []);
        }

        /***/
    }),
    /* 3 */
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
    /* 4 */
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

        exports.getReversedStack = getReversedStack;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Stack = function () {
            function Stack(array) {
                _classCallCheck(this, Stack);

                this.items = array;
            }

            _createClass(Stack, [{
                key: "push",
                value: function push(el) {
                    this.items.push(el);
                }
            }, {
                key: "pop",
                value: function pop() {
                    return this.items.pop();
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
            }, {
                key: "toString",
                value: function toString() {
                    return this.items.toString();
                }
            }]);

            return Stack;
        }();

        var test1 = [1, 2, 3, 4, 5];

        var getReversedStack = function getReversedStack(dataArray) {
            var stack = new Stack(test1);
            return reverse(stack);
        };

        var reverse = function reverse(stack) {
            if (stack.isEmpty()) {
                return;
            }
            var el = getAndRemoveLastElement(stack);
            reverse(stack);
            stack.push(el);
            return stack.toString();
        };

        var getAndRemoveLastElement = function getAndRemoveLastElement(stack) {
            var result = stack.pop();
            if (stack.isEmpty()) {
                return result;
            }
            var last = getAndRemoveLastElement(stack);
            stack.push(result);
            return last;
        };

        function getReversedStack() {
            return getReversedStack(test1);
        }

        /***/
    }),
    /* 5 */
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

        exports.sortStackByStack = sortStackByStack;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Stack = function () {
            function Stack() {
                _classCallCheck(this, Stack);

                this.items = [];
            }

            _createClass(Stack, [{
                key: "push",
                value: function push(el) {
                    this.items.push(el);
                }
            }, {
                key: "pop",
                value: function pop() {
                    return this.items.pop();
                }
            }, {
                key: "peek",
                value: function peek() {
                    return this.items[this.items.length - 1];
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
            }, {
                key: "toString",
                value: function toString() {
                    return this.items.toString();
                }
            }]);

            return Stack;
        }();

        var test1 = [3, 4, 1, 6, 2, 5];

        var createStackFromArray = function createStackFromArray(arr) {
            var stack = new Stack();
            for (var i = 0; i < arr.length; i++) {
                stack.push(arr[i]);
            }
            return stack;
        };

        var sortStack = function sortStack(stack) {
            var sortingStack = new Stack();

            while (!stack.isEmpty()) {
                if (sortingStack.isEmpty()) {
                    sortingStack.push(stack.pop());
                }
                if (sortingStack.peek() > stack.peek()) {
                    var temp = stack.pop();
                    while (!sortingStack.isEmpty()) {
                        stack.push(sortingStack.pop());
                    }
                    sortingStack.push(temp);
                } else {
                    sortingStack.push(stack.pop());
                }
            }

            return sortingStack;
        };

        function sortStackByStack() {
            return sortStack(createStackFromArray(test1));
        }

        /***/
    }),
    /* 6 */
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
                    if (this.pushStack.length && this.popStack.length) {
                        return null;
                    }
                    while (this.pushStack.length) {
                        this.popStack.push(this.pushStack.pop());
                    }
                    return this.popStack.pop();
                }
            }, {
                key: "peek",
                value: function peek() {
                    if (this.pushStack.length && this.popStack.length) {
                        return null;
                    }
                    while (!this.pushStack.length) {
                        this.popStack.push(this.pushStack.pop());
                    }
                    return this.popStack.peek();
                }
            }, {
                key: "size",
                value: function size() {
                    return this.pushStack.length;
                }
            }]);

            return TwoStacksQueue;
        }();

        var test1 = [1, 2, 3, 4, 5];

        function tryQueue(dataArray) {
            var queue = new TwoStacksQueue();
            for (var i = 0; i < dataArray.length; i++) {
                queue.add(dataArray[i]);
            }
            var result = [];
            for (var j = 0; j < dataArray.length; j++) {
                result.push(queue.poll());
            }
            return result;
        }

        function twoStacksQueue() {
            return tryQueue(test1);
        }

        /***/
    }),
    /* 7 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _getMinInStack = __webpack_require__(1);

        var _maxDistanceInArrays = __webpack_require__(3);

        var _twoStacksQueue = __webpack_require__(6);

        var _reversedStack = __webpack_require__(4);

        var _catsAndDogsQueue = __webpack_require__(0);

        var _sortStackByStack = __webpack_require__(5);

        var _hanoi = __webpack_require__(2);

        EvaluateTimeCost(_hanoi.testHanoi);

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