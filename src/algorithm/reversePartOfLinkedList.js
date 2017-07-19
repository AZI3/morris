"use strict";

function Node(val) {
    this.value = val;
    this.next = null;
    this.toString = function () {
        var content = [];
        var p = this;
        while (p) {
            content.push(p.value);
            p = p.next
        }
        return content.join()
    }
}

var getReversedList = function (head, from, to) {
    if (head == null || from > to || from < 1) return head;

    var len = 0;
    var fromPre = null;
    var toPost = null;
    var curNode = head;
    while (curNode) {
        len++;
        fromPre = (len + 1 == from) ? curNode : fromPre;
        toPost = (len - 1 == to) ? curNode : toPost;
        curNode = curNode.next
    }
    if (to > len) return head;

    curNode = fromPre == null ? head : fromPre.next;
    var nextNode = curNode.next;
    curNode.next = toPost;
    var p = null;
    while (nextNode != toPost) {
        p = nextNode.next;
        nextNode.next = curNode;
        curNode = nextNode;
        nextNode = p
    }
    if (fromPre != null) {
        fromPre.next = curNode;
        return head
    }

    return curNode

};

export function reversePartOfLinkedList() {
    var test1 = function () {
        var head = new Node(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        return head
    }();
    var from = 1, to = 3;
    return getReversedList(test1, from, to)
}
