"use strict";

function Node(val) {
    this.value = val;
    this.next = null
}

var isPalindrome = function (head) {
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

export function palindromeCheck() {
    var test1 = function () {
        var head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(2);
        head.next.next.next.next = new Node(1);
        return head
    }();
    return isPalindrome(test1)
}