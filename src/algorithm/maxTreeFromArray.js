"use strict";

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null
    }
}

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

var test1 = [3, 4, 5, 1, 2];

var maxTreeFromArray = function (arr) {
    var nodes = [];
    for (var i = 0; i < arr.length; i++) {
        nodes.push(new Node(arr[i]))
    }
    var stack = new Stack();

    var lMap = new Map();
    var rMap = new Map();

    // for each element, find the first larger number on the left side
    for (var i = 0; i < nodes.length; i++) {
        var curNode = nodes[i];
        while (!stack.isEmpty() && stack.peek().value < curNode.value) {
            popStackSetMap(stack, lMap)
        }
        stack.push(curNode)
    }
    while (!stack.isEmpty()) {
        popStackSetMap(stack, lMap)
    }

    // for each element, find the first larger number on the right side
    for (var i = nodes.length - 1; i >= 0; i--) {
        var curNode = nodes[i];
        while (!stack.isEmpty() && stack.peek().value < curNode.value) {
            popStackSetMap(stack, rMap)
        }
        stack.push(curNode)
    }
    while (!stack.isEmpty()) {
        popStackSetMap(stack, rMap)
    }

    // generate the tree
    var head = null;
    for (var i = 0; i < nodes.length; i++) {
        var curNode = nodes[i];
        var left = lMap.get(curNode);
        var right = rMap.get(curNode);
        if (left == null && right == null) { // no parent, so it's the root
            head = curNode
        } else if (left == null) { // the first larger number on the right is the parent
            if (right.left == null) {
                right.left = curNode
            } else {
                right.right = curNode
            }
        } else if (right == null) { // the first larger number on the left is the parent
            if (left.left == null) {
                left.left = curNode
            } else {
                left.right = curNode
            }
        } else {
            var parent = left.value < right.value ? left : right; // the smaller one is the parent
            if (parent.left == null) {
                parent.left = curNode
            } else {
                parent.right = curNode
            }
        }
    }
    return head
};

function popStackSetMap(stack, map) {
    var node = stack.pop();
    if (stack.isEmpty()) {
        map.set(node, null)
    } else {
        map.set(node, stack.peek())
    }
}

export function getMaxTreeFromArray() {
    return maxTreeFromArray(test1)
}
