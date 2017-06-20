"use strict";


let test1 = [[-8, -7, -7, -5, 1, 1, 3, 4], [-2], [-10, -10, -7, 0, 1, 3], [2]]; // 14

let test2 = [[1, 2, 3], [4, 5], [1, 2, 3]]; // 4

let maxDistance = function (arrays) {
    var maxDiff = 0;
    var maxVal = arrays[0][arrays[0].length - 1];
    var minVal = arrays[0][0];
    for (var i = 1; i < arrays.length; i++) {
        var curArr = arrays[i];
        maxDiff = Math.max(Math.abs(curArr[0] - maxVal), Math.abs(curArr[curArr.length - 1] - minVal), maxDiff);
        maxVal = Math.max(curArr[curArr.length - 1], maxVal);
        minVal = Math.min(curArr[0], minVal)
    }
    return maxDiff
};

export function maxDistanceInArrays() {
    return maxDistance(test1)
}