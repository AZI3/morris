"use strict";

var getErrorResultFromArray = function (nums) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var val = nums[i];
        if (nums[Math.abs(val) - 1] < 0) result[0] = Math.abs(val);
        else nums[Math.abs(val) - 1] *= -1
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[1] = i + 1;
            break
        }
    }
    return result
};

export function findErrorNumberInASequentialArray() {
    var test1 = [2, 1, 2, 6, 5, 3, 4, 8, 9, 7];
    var test2 = [3, 2, 2];
    return getErrorResultFromArray(test2)
}