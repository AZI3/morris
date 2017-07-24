"use strict";

export function copyListHavingRandomPointers() {
    var test1 = function () {
        var n1 = new Node(1);
        var n2 = new Node(2);
        var n3 = new Node(3);
        var head = n1;
        head.next = n2;
        head.next.next = n3;
        head.rand = n3;
        head.next.rand = null;
        head.next.next.rand = n1;
        return head
    }();
    return getCopyOfList(test1)
}

var getCopyOfList = function (head) {
    var map = new Map();
    var p = head;
    while (p) {
        map.set(p, new Node(p.value));
        p = p.next
    }
    p = head;
    while (p) {
        map.get(p).next = map.get(p.next);
        map.get(p).rand = map.get(p.rand);
        p = p.next
    }
    return map.get(head)
};

function Node(val) {
    this.value = val;
    this.next = null;
    this.rand = null;
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