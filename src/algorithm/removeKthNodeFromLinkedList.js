"use strict";

class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }

    toString() {
        var content = [];
        var p = this;
        while (p) {
            content.push(p.value);
            p = p.next
        }
        return content.join()
    }
}

var getRemovedKthNodeList = function (head, k) {
    if (head == null || k < 1) return head;
    var slow = head;
    var fast = head;
    for (var i = 0; i < k; i++) {
        if (fast.next == null) return head; // it reaches the end of the list earlier than k steps
        fast = fast.next
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next
    }
    slow.next = slow.next.next;
    return head
};

export function removeKthNodeFromLinkedList() {
    var test1 = function () {
        var head = new Node(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        return head
    }();

    var k = 2;
    return getRemovedKthNodeList(test1, k)
}


