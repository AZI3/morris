"use strict";


var getMaxValuesInWindow = function (source, wSize) {
    if (source == null || wSize < 1 || source.length < wSize) return [];

    var qMax = [];
    var result = [];
    for (var i = 0; i < source.length; i++) {

        while (qMax.length > 0 && source[qMax[qMax.length - 1]] <= source[i]) {
            qMax.pop()
        }
        qMax.push(i);

        if (qMax[0] == i - wSize) {
            qMax.shift()
        }

        if (qMax[qMax.length - 1] >= wSize - 1) {
            result.push(source[qMax[0]])
        }
    }
    return result
};


var test1 = [4, 3, 5, 4, 3, 3, 6, 7];

export function getLargestInWindowOnArray() {
    return getMaxValuesInWindow(test1, 3)
}
