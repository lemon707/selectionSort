var swap = function(array, firstIndex, secondIndex) {

    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;

};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i += 1) {

        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }

    }
    return minIndex;
};

var selectionSort = function(array) {
    
    var min;

    for(var j = 0 ; j < array.length; j += 1) {

        min = indexOfMinimum(array, j);

        swap(array, j, min);

    }
    return array;
};


var arr = [6, 4, 3, 1, 5];

result = selectionSort(arr);
console.log('result', result);

module.exports = selectionSort;