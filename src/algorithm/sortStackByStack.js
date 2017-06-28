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

var test1 = [3, 4, 1, 6, 2, 5];

var createStackFromArray = function (arr) {
    var stack = new Stack();
    for (var i = 0; i < arr.length; i++) {
        stack.push(arr[i])
    }
    return stack
};

var sortStack = function (stack) {
    var sortingStack = new Stack();

    while (!stack.isEmpty()) {
        if (sortingStack.isEmpty()) {
            sortingStack.push(stack.pop())
        }
        if (sortingStack.peek() > stack.peek()) {
            var temp = stack.pop();
            while (!sortingStack.isEmpty()) {
                stack.push(sortingStack.pop())
            }
            sortingStack.push(temp)
        } else {
            sortingStack.push(stack.pop())
        }
    }

    return sortingStack
};

export function sortStackByStack() {
    return sortStack(createStackFromArray(test1))
}