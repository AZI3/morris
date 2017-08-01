"use strict";

export function reverseKNodes() {
    var test1 = function () {
        var head = new Node(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        return head
    }();
    var k = 3;
    return getReverseKNodes(test1, k)
}

var getReverseKNodes = function (head, k) {
    if (head == null || k <= 1) return head;
    var stack = [];
    var p = head;
    var pre = null;
    var next = null;
    var newHead = head;
    while (p) {
        next = p.next;
        stack.push(p);
        if (stack.length == k) {
            var pre = reverseParts(stack, pre, next);
            newHead = newHead == head ? p : newHead
        }
        p = next
    }
    return newHead
};

var reverseParts = function (stack, pre, next) {
    var p = stack.pop();
    if (pre) pre.next = p;
    while (stack.length > 0) {
        p.next = stack.pop();
        p = p.next
    }
    p.next = next;
    return p
};

function Node(val) {
    this.value = val;
    this.next = null;
    this.toString = function () {
        var result = [];
        var p = this;
        while (p) {
            result.push(p.value);
            p = p.next
        }
        return result.join()
    }
}