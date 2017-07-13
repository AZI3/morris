"use strict";

var test1 = [1, 2, 3, 4, 5], distance1 = 2;


var getSubArraysWithinDistance = function (arr, num) {
    if (arr == null || arr.length == 0) return 0;
    var i = 0, j = 0, res = 0;
    var qMax = [], qMin = [];
    while (i < arr.length) {
        while (j < arr.length) {
            if (qMax.length > 0 && arr[qMax[qMax.length - 1]] <= arr[j]) qMax.pop();
            qMax.push(j);
            if (qMin.length > 0 && arr[qMin[qMin.length - 1]] >= arr[j]) qMin.pop();
            qMin.push(j);
            if (arr[qMax[0]] - arr[qMin[0]] > num) break; // A very important hypothesis is if the current sub array is not qualified, a sub array with larger bounds is not qualified either
            j++
        }
        res += j - i; // if the current sub array is qualified, a sub array with smaller lower bound is qualified too
        if (qMax[0] == i) qMax.shift();
        if (qMin[0] == i) qMin.shift();
        i++
    }
    return res
};

export function subArraysWithinDistance() {
    return getSubArraysWithinDistance(test1, distance1)
}
