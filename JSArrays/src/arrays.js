function getArray() {
    return [84, 64, 67, 93, 7, 20, 21, 3, 17, 50, 40, 99, 48, 14, 17, 64, 56, 34, 33, 14];
}

function getDescendingArray(array) {
    return array.sort(function (a, b) {
        return b - a;
    });
}

function getFirstFiveElementsSubarray(array) {
    return array.slice(0, 5);
}

function getLastFiveElementsSubarray(array) {
    return array.slice(array.length - 5);
}

function getSumEvenElements(array) {
    return array.reduce(function (sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        } else {
            return sum;
        }
    }, 0);
}

function getOneHundredRowArray() {
    var array = [];
    for (var i = 0; i < 100; i++) {
        array.push(i + 1);
    }
    return array;
}

function getSquaredEvenElementsList(array) {
    return array.filter(function (element) {
        return element % 2 === 0;
    }).map(function (element) {
        return element * element;
    });
}

console.log(getArray());
console.log(getDescendingArray(getArray()));
console.log(getFirstFiveElementsSubarray(getArray()));
console.log(getLastFiveElementsSubarray(getArray()));
console.log(getSumEvenElements(getArray()));
console.log(getOneHundredRowArray());
console.log(getSquaredEvenElementsList(getOneHundredRowArray()));