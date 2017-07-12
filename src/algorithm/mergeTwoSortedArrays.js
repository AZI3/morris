"use strict";

var arr1 = [1, 3, 4, 5, 6, 9];
var arr2 = [2, 4, 6, 8, 10];

var getMergedArray = function (arr1, arr2) {
    var i = 0;
    var j = 0;
    var result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) result.push(arr1[i++]);
        else if (arr1[i] > arr2[j]) result.push(arr2[j++]);
        else {
            result.push(arr1[i++]);
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i++])
    }
    while (j < arr2.length) {
        result.push(arr2[j++])
    }
    return result
};

export function mergeTwoSortedArrays() {
    return getMergedArray(arr1, arr2)
}