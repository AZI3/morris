"use strict";

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

var getListPartition = function (head, pivot) {
    if (head == null) return head;

    var arr = [];
    var p = head;
    while (p) {
        arr.push(p);
        p = p.next
    }

    arrPartition(arr, pivot);

    for (var i = 1; i < arr.length; i++) {
        arr[i - 1].next = arr[i]
    }
    arr[arr.length - 1].next = null;
    return arr[0]
};

var arrPartition = function (arr, pivot) {
    var small = -1;
    var big = arr.length;
    var index = 0;
    while (index != big) {
        if (arr[index].value < pivot) swap(arr, ++small, index++);
        else if (arr[index].value == pivot) index++;
        else swap(arr, --big, index)
    }
};

var swap = function (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
};

var getListPartition2 = function (head, pivot) {
    var sH = null, sT = null;
    var eH = null, eT = null;
    var bH = null, bT = null;

    var next = null;
    while (head) {
        next = head.next;
        head.next = null;

        if (head.value < pivot) {
            if (sH == null) {
                sH = head;
                sT = head
            } else {
                sT.next = head;
                sT = head
            }
        } else if (head.value == pivot) {
            if (eH == null) {
                eH = head;
                eT = head
            } else {
                eT.next = head;
                eT = head
            }
        } else {
            if (bH == null) {
                bH = head;
                bT = head
            } else {
                bT.next = head;
                bT = head
            }
        }
        head = next
    }

    if (sT != null) {
        sT.next = eH;
        eT = eT == null ? sT : eT
    }

    if (eT != null) {
        eT.next = bH
    }

    if (sH != null) return sH;
    if (eH != null) return eH;
    return bH

};

export function listPartition() {
    var test1 = function () {
        var head = new Node(9);
        head.next = new Node(3);
        head.next.next = new Node(0);
        head.next.next.next = new Node(5);
        head.next.next.next.next = new Node(1);
        return head
    }();
    var pivot1 = 3;
    return getListPartition2(test1, pivot1)
}