"use strict";

function Node(val) {
    this.value = val;
    this.next = null
}

var isPalindrome = function (head) {
    if (head == null || head.next == null) return head;
    var stack = [];

    var node = head;
    while (node) {
        stack.push(node);
        node = node.next
    }

    node = head;
    while (stack.length > 0) {
        if (node.value != stack.pop().value) return false;
        node = node.next
    }
    return true
};

var isPalindrome2 = function (head) {
    if (head == null || head.next == null) return head;

    var p = head;
    var rightHead = head;
    while (p.next && p.next.next) { // two pointers, one moves 2x faster than the other
        p = p.next.next;
        rightHead = rightHead.next
    }
    rightHead = rightHead.next;

    var stack = [];
    while (rightHead) {
        stack.push(rightHead);
        rightHead = rightHead.next
    }

    p = head;
    while (stack.length > 0) {
        if (p.value != stack.pop().value) return false;
        p = p.next
    }
    return true

};

var isPalindrome3 = function (head) {
    if (head == null || head.next == null) return head;

    var p = head;
    var rightHead = head;
    while (p.next && p.next.next) {
        p = p.next.next;
        rightHead = rightHead.next
    }
    var pre = rightHead;
    rightHead = rightHead.next;
    pre.next = null;

    while (rightHead) {
        p = rightHead.next;
        rightHead.next = pre;
        pre = rightHead;
        rightHead = p
    }

    p = head;
    rightHead = pre;
    while (pre != null && p != null) {
        if (pre.value != p.value) {
            return false
        }
        pre = pre.next;
        p = p.next
    }

    pre = null;
    while (rightHead) { // restore the list
        p = rightHead.next;
        rightHead.next = pre;
        pre = rightHead;
        rightHead = p
    }

    return true

};

export function palindromeCheck() {
    var test1 = function () {
        var head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(2);
        head.next.next.next.next = new Node(1);
        return head
    }();
    return isPalindrome3(test1)
}