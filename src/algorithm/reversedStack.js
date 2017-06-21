"use strict";

class ReversedStack {
    constructor(array) {
        this.items = array
    }

    push(el) {
        this.items.push(el)
    }

    pop() {
        return this.items.pop()
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

var test1 = [1, 2, 3, 4, 5];

var getReversedStack = function (dataArray) {
    var stack = new ReversedStack(test1);
    return reverse(stack)
};

var reverse = function (stack) {
    if (stack.isEmpty()) {
        return
    }
    var el = getAndRemoveLastElement(stack);
    reverse(stack);
    stack.push(el);
    return stack.toString()
};

var getAndRemoveLastElement = function (stack) {
    var result = stack.pop();
    if (stack.isEmpty()) {
        return result;
    }
    var last = getAndRemoveLastElement(stack);
    stack.push(result);
    return last
};

export function getReversedStack() {
    return getReversedStack(test1)
}