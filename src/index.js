"use strict";

import {getMinInStack} from "./algorithm/getMinInStack.js";
import {maxDistanceInArrays} from "./algorithm/maxDistanceInArrays.js";
import {twoStacksQueue} from "./algorithm/twoStacksQueue.js"
import {getReversedStack} from "./algorithm/reversedStack.js"
import {dequeueCatsAndDogsQueue} from "./algorithm/catsAndDogsQueue.js"
import {sortStackByStack} from "./algorithm/sortStackByStack.js"
import {testHanoi, testHanoi2, testHanoi3} from "./algorithm/hanoi.js"
import {getLargestInWindowOnArray} from "./algorithm/getLargestInWindowOnArray.js"
import {getMaxTreeFromArray} from "./algorithm/maxTreeFromArray"
import {maxRectSizeFromMatrix} from "./algorithm/maxRectSizeFromMatrix.js"
import {mergeTwoSortedArrays} from  "./algorithm/mergeTwoSortedArrays.js"
import {subArraysWithinDistance} from "./algorithm/subArraysWithinDistance.js"
import {commonPartOfTwoSortedLinkedLists} from "./algorithm/commonPartOfTwoSortedLinkedLists.js"
import {removeKthNodeFromLinkedList} from "./algorithm/removeKthNodeFromLinkedList.js"
import {removeLastKthNodeFromDNodeList} from "./algorithm/removeLastKthNodeFromDNodeList"
import {exclusiveTimeOfFunctionExecution} from "./algorithm/exclusiveTimeOfFunctionExecution.js"
import {removeMiddleNodeFromLinkedList} from "./algorithm/removeMiddleNodeFromLinkedList"
import {removeNodeAtAOverBFromLinkedList} from "./algorithm/removeNodeAtAOverBFromLinkedList"
import {reverseLinkedList} from "./algorithm/reverseLinkedList"
import {reverseDNodeList} from "./algorithm/reverseDNodeList"
import {reversePartOfLinkedList} from "./algorithm/reversePartOfLinkedList"
import {josephKill} from "./algorithm/josephKill"
import {palindromeCheck} from "./algorithm/palindromeCheck"
import {listPartition} from "./algorithm/listPartition"
import {findErrorNumberInASequentialArray} from "./algorithm/findErrorNumsInASequentialArray"
import {copyListHavingRandomPointers} from "./algorithm/copyListHavingRandomPointers"
import {addList} from "./algorithm/addList"
import {listsIntersection} from "./algorithm/listsIntersection"


EvaluateTimeCost(listsIntersection);

function EvaluateTimeCost(func) {
    let startTime = new Date();

    for (var i = 0; i < 10000; i++) {
        func()
    }
    let result = func();

    let endTime = new Date();
    let timerEl = document.getElementById('timer');
    timerEl.innerHTML = (endTime.getTime() - startTime.getTime()) / 10001;
    let resultEl = document.getElementById('result');
    resultEl.innerHTML = result
}

