"use strict";

class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}

var test1 = function () {
    var head = new Node(null);
    var p = head;
    for (var i = 1; i <= 5; i++) {
        p.next = new Node(i);
        p = p.next
    }
    return head
}();

var test2 = function () {
    var head = new Node(null);
    var p = head;
    for (var i = 2; i <= 6; i += 2) {
        p.next = new Node(i);
        p = p.next
    }
    return head
}();

var getCommonPartOfTwoSortedLinkedLists = function (list1, list2) {
    var result = [];
    var iNode = list1.next;
    var jNode = list2.next;
    while (iNode && jNode) {
        if (iNode.value < jNode.value) {
            // result.push(iNode.value)
            iNode = iNode.next
        } else if (jNode.value > iNode.value) {
            // result.push(jNode.value)
            jNode = jNode.next
        } else {
            result.push(iNode.value);
            iNode = iNode.next;
            jNode = jNode.next
        }
    }
    /*    while(iNode) {
     result.push(iNode.value)
     iNode = iNode.next
     }
     while(jNode) {
     result.push(jNode.value)
     jNode = jNode.next
     }*/
    return result
};

export function commonPartOfTwoSortedLinkedLists() {
    return getCommonPartOfTwoSortedLinkedLists(test1, test2)
}