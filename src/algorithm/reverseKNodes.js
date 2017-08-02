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
    return getReverseKNodes2(test1, k)
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

var getReverseKNodes2 = function (head, k) {
    if (head == null || k <= 1) return head;
    var cur = head;
    var next = null;
    var pre = null;
    var start = null; // the last node of the last group
    var cnt = 1;
    while (cur) {
        next = cur.next;
        if (cnt == k) {
            start = pre == null ? head : pre.next;
            head = pre == null ? cur : head; // record the new head
            reverseParts2(pre, start, cur, next);
            pre = start;
            cnt = 0
        }
        cnt++;
        cur = next
    }
    return head
};

var reverseParts2 = function (left, start, end, right) {
    var pre = start;
    var cur = start.next;
    var next = null;
    while (cur != right) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next
    }
    if (left != null) {
        left.next = end
    }
    start.next = right
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