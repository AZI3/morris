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
    return __webpack_require__(__webpack_require__.s = 22);
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
        exports.commonPartOfTwoSortedLinkedLists = commonPartOfTwoSortedLinkedLists;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Node = function Node(val) {
            _classCallCheck(this, Node);

            this.value = val;
            this.next = null;
        };

        var test1 = function () {
            var head = new Node(null);
            var p = head;
            for (var i = 1; i <= 5; i++) {
                p.next = new Node(i);
                p = p.next;
            }
            return head;
        }();

        var test2 = function () {
            var head = new Node(null);
            var p = head;
            for (var i = 2; i <= 6; i += 2) {
                p.next = new Node(i);
                p = p.next;
            }
            return head;
        }();

        var getCommonPartOfTwoSortedLinkedLists = function getCommonPartOfTwoSortedLinkedLists(list1, list2) {
            var result = [];
            var iNode = list1.next;
            var jNode = list2.next;
            while (iNode && jNode) {
                if (iNode.value < jNode.value) {
                    // result.push(iNode.value)
                    iNode = iNode.next;
                } else if (jNode.value > iNode.value) {
                    // result.push(jNode.value)
                    jNode = jNode.next;
                } else {
                    result.push(iNode.value);
                    iNode = iNode.next;
                    jNode = jNode.next;
                }
            }
            /*    while(iNode) {
             result.push(iNode.value)
             iNode = iNode.next
             }
             while(jNode) {
             result.push(jNode.value)
             jNode = jNode.next
             }*/
            return result;
        };

        function commonPartOfTwoSortedLinkedLists() {
            return getCommonPartOfTwoSortedLinkedLists(test1, test2);
        }

        /***/
    }),
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.exclusiveTimeOfFunctionExecution = exclusiveTimeOfFunctionExecution;
        var exclusiveTime = function exclusiveTime(n, logs) {
            var funcStack = [];
            var result = [];
            var prevTime = 0;
            for (var i = 0; i < n; i++) {
                result[i] = 0;
            }
            for (var i = 0; i < logs.length; i++) {
                var parts = logs[i].split(":");
                if (parts[1] == 'start') {
                    if (funcStack.length > 0) {
                        result[funcStack[funcStack.length - 1]] += parseInt(parts[2]) - prevTime;
                    }
                    funcStack.push(parseInt(parts[0]));
                    prevTime = parseInt(parts[2]);
                } else {
                    result[funcStack.pop()] += parseInt(parts[2]) - prevTime + 1;
                    prevTime = parseInt(parts[2]) + 1;
                }
            }
            return result;
        };

        function exclusiveTimeOfFunctionExecution() {
            var n = 2;
            var test1 = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
            return exclusiveTime(n, test1);
        }

        /***/
    }),
    /* 3 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getLargestInWindowOnArray = getLargestInWindowOnArray;
        var getMaxValuesInWindow = function getMaxValuesInWindow(source, wSize) {
            if (source == null || wSize < 1 || source.length < wSize) return [];

            var qMax = [];
            var result = [];
            for (var i = 0; i < source.length; i++) {

                while (qMax.length > 0 && source[qMax[qMax.length - 1]] <= source[i]) {
                    qMax.pop();
                }
                qMax.push(i);

                if (qMax[0] == i - wSize) {
                    qMax.shift();
                }

                if (qMax[qMax.length - 1] >= wSize - 1) {
                    result.push(source[qMax[0]]);
                }
            }
            return result;
        };

        var test1 = [4, 3, 5, 4, 3, 3, 6, 7];

        function getLargestInWindowOnArray() {
            return getMaxValuesInWindow(test1, 3);
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

        exports.testHanoi = testHanoi;
        exports.testHanoi2 = testHanoi2;
        exports.testHanoi3 = testHanoi3;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var hanoi = function hanoi(nums, origin, aux, dest, log) {
            if (nums == 1) {
                log.push("Move disk 1 from " + origin + " to " + dest);
                return;
            }
            hanoi(nums - 1, origin, dest, aux, log);
            log.push("Move disk " + nums + " from " + origin + " to " + dest);
            hanoi(nums - 1, aux, origin, dest, log);
            return log;
        };

        var test1 = 3;
        var test2 = 5;

        function testHanoi() {
            return hanoi(test1, "A", "B", "C", []);
        }

        var hanoi2 = function hanoi2(nums, origin, aux, dest, log) {
            // mid peg must be used
            if (nums == 1) {
                log.push("Move disk 1 from " + origin + " to " + aux);
                log.push("Move disk 1 from " + aux + " to " + dest);
                return log;
            }
            hanoi2(nums - 1, origin, aux, dest, log);
            log.push("Move disk " + nums + " from " + origin + " to " + aux);
            hanoi2(nums - 1, dest, aux, origin, log);
            log.push("Move disk " + nums + " from " + aux + " to " + dest);
            hanoi2(nums - 1, origin, aux, dest, log);
            return log;
        };

        function testHanoi2() {
            return hanoi2(test1, "A", "B", "C", []);
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

        var ACTION = {
            NO: 0,
            L2M: 1,
            M2L: 2,
            R2M: 3,
            M2R: 4
        };

        var hanoi3 = function hanoi3(nums, origin, aux, dest, log) {
            var originStack = new Stack();
            originStack.tag = origin;
            originStack.push(Number.MAX_VALUE);
            var auxStack = new Stack();
            auxStack.tag = aux;
            auxStack.push(Number.MAX_VALUE);
            var destStack = new Stack();
            destStack.tag = dest;
            destStack.push(Number.MAX_VALUE);

            // initialize origin stack
            for (var i = nums; i > 0; i--) {
                originStack.push(i);
            }

            var lastMove = ACTION.NO;
            while (destStack.size() != nums) {
                moveStack(ACTION.M2L, ACTION.L2M, originStack, auxStack);
                moveStack(ACTION.M2R, ACTION.R2M, destStack, auxStack);
                moveStack(ACTION.L2M, ACTION.M2L, auxStack, originStack);
                moveStack(ACTION.R2M, ACTION.M2R, auxStack, destStack);
            }
            return log;

            function moveStack(forbid, next, from, to) {
                if (lastMove != forbid && from.peek() < to.peek()) {
                    var val = from.pop();
                    to.push(val);
                    log.push("Move disk " + val + " from " + from.tag + " to " + to.tag);
                    lastMove = next;
                }
            }
        };

        function testHanoi3() {
            return hanoi3(test1, "A", "B", "C", []);
        }

        /***/
    }),
    /* 6 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.josephKill = josephKill;

        function Node(val) {
            this.value = val;
            this.next = null;
            this.toString = function () {
                var content = [];
                var p = this;
                while (p) {
                    content.push(p.value);
                    if (p.next == p) break;
                    p = p.next;
                }
                return content.join();
            };
        }

        var getJosephKill = function getJosephKill(head, m) {
            if (head == null || head == head.next || m < 1) return head;

            var last = head;
            while (last.next != head) {
                last = last.next;
            }

            var cnt = 0;
            while (last != head) {
                if (++cnt == m) {
                    last.next = head.next;
                    cnt = 0;
                } else {
                    last = last.next;
                }
                head = last.next;
            }
            return head;
        };

        function josephKill() {
            var test1 = function () {
                var head = new Node(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new Node(i);
                    p = p.next;
                }
                p.next = head;
                return head;
            }();
            var m = 3;
            return getJosephKill(test1, m);
        }

        /***/
    }),
    /* 7 */
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
    /* 8 */
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

        exports.maxRectSizeFromMatrix = maxRectSizeFromMatrix;

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

        var getMaxRectSizeFromMatrix = function getMaxRectSizeFromMatrix(arr) {
            if (arr == null || arr.length == 0 || arr[0].length == 0) return 0;
            var maxArea = 0;
            var height = [0, 0, 0, 0];
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    height[j] = arr[i][j] == 0 ? 0 : height[j] + 1;
                }
                maxArea = Math.max(maxArea, maxRectFromBottom(height));
            }
            return maxArea;
        };

        var maxRectFromBottom = function maxRectFromBottom(height) {
            if (height == null || height.length == 0) return 0;
            var maxArea = 0;
            var stack = new Stack();
            for (var i = 0; i < height.length; i++) {
                while (!stack.isEmpty() && height[stack.peek()] >= height[i]) {
                    var j = stack.pop();
                    var k = stack.isEmpty() ? -1 : stack.peek();
                    var curArea = (i - 1 - (k + 1) + 1) * height[j];
                    maxArea = Math.max(maxArea, curArea);
                }
                stack.push(i);
            }
            while (!stack.isEmpty()) {
                var j = stack.pop();
                var k = stack.isEmpty() ? -1 : stack.peek();
                var curArea = (height.length - 1 - (k + 1) + 1) * height[j];
                maxArea = Math.max(maxArea, curArea);
            }
            return maxArea;
        };

        var test1 = [];
        test1[0] = [];
        test1[1] = [];
        test1[2] = [];

        test1[0][0] = 1;
        test1[0][1] = 0;
        test1[0][2] = 1;
        test1[0][3] = 1;

        test1[1][0] = 1;
        test1[1][1] = 1;
        test1[1][2] = 1;
        test1[1][3] = 1;

        test1[2][0] = 1;
        test1[2][1] = 1;
        test1[2][2] = 1;
        test1[2][3] = 0;

        function maxRectSizeFromMatrix() {
            return getMaxRectSizeFromMatrix(test1);
        }

        /***/
    }),
    /* 9 */
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

        exports.getMaxTreeFromArray = getMaxTreeFromArray;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Node = function Node(val) {
            _classCallCheck(this, Node);

            this.value = val;
            this.left = null;
            this.right = null;
        };

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

        var test1 = [3, 4, 5, 1, 2];

        var maxTreeFromArray = function maxTreeFromArray(arr) {
            var nodes = [];
            for (var i = 0; i < arr.length; i++) {
                nodes.push(new Node(arr[i]));
            }
            var stack = new Stack();

            var lMap = new Map();
            var rMap = new Map();

            // for each element, find the first larger number on the left side
            for (var i = 0; i < nodes.length; i++) {
                var curNode = nodes[i];
                while (!stack.isEmpty() && stack.peek().value < curNode.value) {
                    popStackSetMap(stack, lMap, rMap, curNode);
                }
                stack.push(curNode);
            }
            while (!stack.isEmpty()) {
                popStackSetMap(stack, lMap, rMap, null);
            }

            /*    // for each element, find the first larger number on the right side
            for (var i = nodes.length - 1; i >= 0; i--) {
                var curNode = nodes[i];
                while (!stack.isEmpty() && stack.peek().value < curNode.value) {
                    popStackSetMap(stack, rMap)
                }
                stack.push(curNode)
            }
            while (!stack.isEmpty()) {
                popStackSetMap(stack, rMap)
             }*/

            // generate the tree
            var head = null;
            for (var i = 0; i < nodes.length; i++) {
                var curNode = nodes[i];
                var left = lMap.get(curNode);
                var right = rMap.get(curNode);
                if (left == null && right == null) {
                    // no parent, so it's the root
                    head = curNode;
                } else if (left == null) {
                    // the first larger number on the right is the parent
                    if (right.left == null) {
                        right.left = curNode;
                    } else {
                        right.right = curNode;
                    }
                } else if (right == null) {
                    // the first larger number on the left is the parent
                    if (left.left == null) {
                        left.left = curNode;
                    } else {
                        left.right = curNode;
                    }
                } else {
                    var parent = left.value < right.value ? left : right; // the smaller one is the parent
                    if (parent.left == null) {
                        parent.left = curNode;
                    } else {
                        parent.right = curNode;
                    }
                }
            }
            return head;
        };

        function popStackSetMap(stack, lMap, rMap, curNode) {
            var node = stack.pop();
            if (stack.isEmpty()) {
                lMap.set(node, null);
            } else {
                lMap.set(node, stack.peek());
            }
            rMap.set(node, curNode);
        }

        function getMaxTreeFromArray() {
            return maxTreeFromArray(test1);
        }

        /***/
    }),
    /* 10 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.mergeTwoSortedArrays = mergeTwoSortedArrays;
        var arr1 = [1, 3, 4, 5, 6, 9];
        var arr2 = [2, 4, 6, 8, 10];

        var getMergedArray = function getMergedArray(arr1, arr2) {
            var i = 0;
            var j = 0;
            var result = [];

            while (i < arr1.length && j < arr2.length) {
                if (arr1[i] < arr2[j]) result.push(arr1[i++]); else if (arr1[i] > arr2[j]) result.push(arr2[j++]); else {
                    result.push(arr1[i++]);
                    j++;
                }
            }
            while (i < arr1.length) {
                result.push(arr1[i++]);
            }
            while (j < arr2.length) {
                result.push(arr2[j++]);
            }
            return result;
        };

        function mergeTwoSortedArrays() {
            return getMergedArray(arr1, arr2);
        }

        /***/
    }),
    /* 11 */
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

        exports.removeKthNodeFromLinkedList = removeKthNodeFromLinkedList;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Node = function () {
            function Node(val) {
                _classCallCheck(this, Node);

                this.value = val;
                this.next = null;
            }

            _createClass(Node, [{
                key: "toString",
                value: function toString() {
                    var content = [];
                    var p = this;
                    while (p) {
                        content.push(p.value);
                        p = p.next;
                    }
                    return content.join();
                }
            }]);

            return Node;
        }();

        var getRemovedKthNodeList = function getRemovedKthNodeList(head, k) {
            if (head == null || k < 1) return head;
            var slow = head;
            var fast = head;
            for (var i = 0; i < k; i++) {
                if (fast.next == null) return head; // it reaches the end of the list earlier than k steps
                fast = fast.next;
            }
            while (fast.next) {
                fast = fast.next;
                slow = slow.next;
            }
            slow.next = slow.next.next;
            return head;
        };

        function removeKthNodeFromLinkedList() {
            var test1 = function () {
                var head = new Node(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new Node(i);
                    p = p.next;
                }
                return head;
            }();

            var k = 2;
            return getRemovedKthNodeList(test1, k);
        }

        /***/
    }),
    /* 12 */
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

        exports.removeLastKthNodeFromDNodeList = removeLastKthNodeFromDNodeList;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var DNode = function () {
            function DNode(val) {
                _classCallCheck(this, DNode);

                this.value = val;
                this.next = null;
                this.prev = null;
            }

            _createClass(DNode, [{
                key: "toString",
                value: function toString() {
                    var content = [];
                    var p = this;
                    while (p) {
                        content.push(p.value);
                        p = p.next;
                    }
                    return content.join();
                }
            }]);

            return DNode;
        }();

        var getRemovedLastKthNodeList = function getRemovedLastKthNodeList(head, k) {
            if (head == null || k < 1) return head;
            var slow = head,
                fast = head;
            for (var i = 0; i < k; i++) {
                if (fast.next == null) return head;
                fast = fast.next;
            }
            while (fast.next) {
                fast = fast.next;
                slow = slow.next;
            }
            slow.next.next.prev = slow;
            slow.next = slow.next.next;
            return head;
        };

        function removeLastKthNodeFromDNodeList() {
            var test1 = function () {
                var head = new DNode(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new DNode(i);
                    p.next.prev = p;
                    p = p.next;
                }
                return head;
            }();
            var k = 2;
            return getRemovedLastKthNodeList(test1, k);
        }

        /***/
    }),
    /* 13 */
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

        exports.removeMiddleNodeFromLinkedList = removeMiddleNodeFromLinkedList;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Node = function () {
            function Node(val) {
                _classCallCheck(this, Node);

                this.value = val;
                this.next = null;
            }

            _createClass(Node, [{
                key: "toString",
                value: function toString() {
                    var content = [];
                    var p = this;
                    while (p) {
                        content.push(p.value);
                        p = p.next;
                    }
                    return content.join();
                }
            }]);

            return Node;
        }();

        var getRemovedMiddleNodeList = function getRemovedMiddleNodeList(head) {
            if (head == null || head.next == null) return head;

            if (head.next.next == null) return head.next;

            var pre = head.next; // first node
            var cur = head.next.next.next; // third node
            while (cur.next != null && cur.next.next != null) {
                pre = pre.next; // moves one step
                cur = cur.next.next; // moves two steps
            }
            pre.next = pre.next.next; // skip the middle node
            return head;
        };

        function removeMiddleNodeFromLinkedList() {
            var test1 = function () {
                var head = new Node(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new Node(i);
                    p = p.next;
                }
                return head;
            }();

            return getRemovedMiddleNodeList(test1);
        }

        /***/
    }),
    /* 14 */
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

        exports.removeNodeAtAOverBFromLinkedList = removeNodeAtAOverBFromLinkedList;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Node = function () {
            function Node(val) {
                _classCallCheck(this, Node);

                this.value = val;
                this.next = null;
            }

            _createClass(Node, [{
                key: "toString",
                value: function toString() {
                    var content = [];
                    var p = this;
                    while (p) {
                        content.push(p.value);
                        p = p.next;
                    }
                    return content.join();
                }
            }]);

            return Node;
        }();

        var getRemovedNodelist = function getRemovedNodelist(head, a, b) {
            if (head == null || a == 0 || b == 0 || a > b) return head;
            var cnt = 0;
            var p = head;
            while (p) {
                cnt++;
                p = p.next;
            }
            var idx = Math.ceil(a * cnt / b);

            p = head;
            while (--idx > 1) {
                p = p.next;
            }
            p.next = p.next.next;
            return head;
        };

        function removeNodeAtAOverBFromLinkedList() {
            var test1 = function () {
                var head = new Node(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new Node(i);
                    p = p.next;
                }
                return head;
            }();
            var a = 2,
                b = 5;
            return getRemovedNodelist(test1, a, b);
        }

        /***/
    }),
    /* 15 */
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

        exports.reverseDNodeList = reverseDNodeList;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var DNode = function () {
            function DNode(val) {
                _classCallCheck(this, DNode);

                this.value = val;
                this.next = null;
                this.prev = null;
            }

            _createClass(DNode, [{
                key: "toString",
                value: function toString() {
                    var content = [];
                    var p = this;
                    while (p) {
                        content.push(p.value);
                        p = p.next;
                    }
                    return content.join();
                }
            }]);

            return DNode;
        }();

        var getReversedDNodeList = function getReversedDNodeList(head) {
            if (head == null) return head;
            var pre = null;
            var next = null;
            while (head) {
                var next = head.next;
                head.next = pre;
                pre = head;
                head = next;
            }
            return pre;
        };

        function reverseDNodeList() {
            var test1 = function () {
                var head = new DNode(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new DNode(i);
                    p.next.prev = p;
                    p = p.next;
                }
                return head;
            }();

            return getReversedDNodeList(test1);
        }

        /***/
    }),
    /* 16 */
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

        exports.reverseLinkedList = reverseLinkedList;

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Node = function () {
            function Node(val) {
                _classCallCheck(this, Node);

                this.value = val;
                this.next = null;
            }

            _createClass(Node, [{
                key: "toString",
                value: function toString() {
                    var content = [];
                    var p = this;
                    while (p) {
                        content.push(p.value);
                        p = p.next;
                    }
                    return content.join();
                }
            }]);

            return Node;
        }();

        var getReversedLinkedList = function getReversedLinkedList(head) {
            var pre = null;
            var next = null;
            while (head) {
                next = head.next;
                head.next = pre;
                pre = head;
                head = next;
            }
            return pre;
        };

        function reverseLinkedList() {
            var test1 = function () {
                var head = new Node(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new Node(i);
                    p = p.next;
                }
                return head;
            }();
            return getReversedLinkedList(test1);
        }

        /***/
    }),
    /* 17 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.reversePartOfLinkedList = reversePartOfLinkedList;

        function Node(val) {
            this.value = val;
            this.next = null;
            this.toString = function () {
                var content = [];
                var p = this;
                while (p) {
                    content.push(p.value);
                    p = p.next;
        }
                return content.join();
            };
        }

        var getReversedList = function getReversedList(head, from, to) {
            if (head == null || from > to || from < 1) return head;

            var len = 0;
            var fromPre = null;
            var toPost = null;
            var curNode = head;
            while (curNode) {
                len++;
                fromPre = len + 1 == from ? curNode : fromPre;
                toPost = len - 1 == to ? curNode : toPost;
                curNode = curNode.next;
            }
            if (to > len) return head;

            curNode = fromPre == null ? head : fromPre.next;
            var nextNode = curNode.next;
            curNode.next = toPost;
            var p = null;
            while (nextNode != toPost) {
                p = nextNode.next;
                nextNode.next = curNode;
                curNode = nextNode;
                nextNode = p;
            }
            if (fromPre != null) {
                fromPre.next = curNode;
                return head;
            }

            return curNode;
        };

        function reversePartOfLinkedList() {
            var test1 = function () {
                var head = new Node(1);
                var p = head;
                for (var i = 2; i <= 5; i++) {
                    p.next = new Node(i);
                    p = p.next;
                }
                return head;
            }();
            var from = 1,
                to = 3;
            return getReversedList(test1, from, to);
        }

        /***/
    }),
    /* 18 */
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
    /* 19 */
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
    /* 20 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.subArraysWithinDistance = subArraysWithinDistance;
        var test1 = [1, 2, 3, 4, 5],
            distance1 = 2;

        var getSubArraysWithinDistance = function getSubArraysWithinDistance(arr, num) {
            if (arr == null || arr.length == 0) return 0;
            var i = 0,
                j = 0,
                res = 0;
            var qMax = [],
                qMin = [];
            while (i < arr.length) {
                while (j < arr.length) {
                    if (qMax.length > 0 && arr[qMax[qMax.length - 1]] <= arr[j]) qMax.pop();
                    qMax.push(j);
                    if (qMin.length > 0 && arr[qMin[qMin.length - 1]] >= arr[j]) qMin.pop();
                    qMin.push(j);
                    if (arr[qMax[0]] - arr[qMin[0]] > num) break; // A very important hypothesis is if the current sub array is not qualified, a sub array with larger bounds is not qualified either
                    j++;
                }
                res += j - i; // if the current sub array is qualified, a sub array with smaller lower bound is qualified too
                if (qMax[0] == i) qMax.shift();
                if (qMin[0] == i) qMin.shift();
                i++;
            }
            return res;
        };

        function subArraysWithinDistance() {
            return getSubArraysWithinDistance(test1, distance1);
        }

        /***/
    }),
    /* 21 */
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
    /* 22 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _getMinInStack = __webpack_require__(4);

        var _maxDistanceInArrays = __webpack_require__(7);

        var _twoStacksQueue = __webpack_require__(21);

        var _reversedStack = __webpack_require__(18);

        var _catsAndDogsQueue = __webpack_require__(0);

        var _sortStackByStack = __webpack_require__(19);

        var _hanoi = __webpack_require__(5);

        var _getLargestInWindowOnArray = __webpack_require__(3);

        var _maxTreeFromArray = __webpack_require__(9);

        var _maxRectSizeFromMatrix = __webpack_require__(8);

        var _mergeTwoSortedArrays = __webpack_require__(10);

        var _subArraysWithinDistance = __webpack_require__(20);

        var _commonPartOfTwoSortedLinkedLists = __webpack_require__(1);

        var _removeKthNodeFromLinkedList = __webpack_require__(11);

        var _removeLastKthNodeFromDNodeList = __webpack_require__(12);

        var _exclusiveTimeOfFunctionExecution = __webpack_require__(2);

        var _removeMiddleNodeFromLinkedList = __webpack_require__(13);

        var _removeNodeAtAOverBFromLinkedList = __webpack_require__(14);

        var _reverseLinkedList = __webpack_require__(16);

        var _reverseDNodeList = __webpack_require__(15);

        var _reversePartOfLinkedList = __webpack_require__(17);

        var _josephKill = __webpack_require__(6);

        EvaluateTimeCost(_josephKill.josephKill);

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