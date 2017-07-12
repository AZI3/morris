"use strict";

class Stack {
    constructor() {
        this.items = []
    }

    push(el) {
        this.items.push(el)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    toString() {
        return this.items.toString()
    }

}

var getMaxRectSizeFromMatrix = function (arr) {
    if (arr == null || arr.length == 0 || arr[0].length == 0) return 0;
    var maxArea = 0;
    var height = [0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            height[j] = arr[i][j] == 0 ? 0 : height[j] + 1
        }
        maxArea = Math.max(maxArea, maxRectFromBottom(height))
    }
    return maxArea
};

var maxRectFromBottom = function (height) {
    if (height == null || height.length == 0) return 0;
    var maxArea = 0;
    var stack = new Stack();
    for (var i = 0; i < height.length; i++) {
        while (!stack.isEmpty() && height[stack.peek()] >= height[i]) {
            var j = stack.pop();
            var k = stack.isEmpty() ? -1 : stack.peek();
            var curArea = ((i - 1) - (k + 1) + 1) * height[j];
            maxArea = Math.max(maxArea, curArea)
        }
        stack.push(i)
    }
    while (!stack.isEmpty()) {
        var j = stack.pop();
        var k = stack.isEmpty() ? -1 : stack.peek();
        var curArea = ((height.length - 1) - (k + 1) + 1) * height[j];
        maxArea = Math.max(maxArea, curArea)
    }
    return maxArea
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

export function maxRectSizeFromMatrix() {
    return getMaxRectSizeFromMatrix(test1)
}