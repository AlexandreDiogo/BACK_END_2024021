var utils = {
    isEmpty: function (array) {
        return array.length == 0;
    },


    max: function (array) {
        var max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },


    min: function (array) {
        var min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    },


    average: function (array) {
        var soma = 0;
        for (var i = 0; i < array.length; i++) {
            soma += array[i];
        }
        return soma / array.length;
    },


    indexOF: function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] = value) {
                return i;
            }
        }
    },

    subarray: function (array, startIndex, endIndex) {
        var subarray = [];
        for (let i = startIndex; i <= endIndex; i++) {
            subarray.push(array[i]);
        }
        return subarray;
    },

    isSameLength: function (a1, a2) {
        if (a1.length == a2.length) {
            return "Yes";
        }
        else {
            return "No";
        }
    },


    reverse: function (array) {
        var reverseArray = [];
        for (i = array.length - 1; i >= 0; i--) {
            reverseArray.push(array[i]);
        }
        return reverseArray;
    },


    swap: function (array, index1, index2) {
        swappedArray = [];
        for (let i = 0; i < array.length; i++) {
            if (i == index1) {
                swappedArray.push(array[index2]);
            }
            else if (i == index2) {
                swappedArray.push(array[index1]);
            }
            else {
                swappedArray.push(array[i]);
            }
        }
        return swappedArray
    },


    contains: function (array, value) {
       return this.indexOF (array, value) != -1; 
    },


    arrayConcatenate: function (a, b, c) {
        a();
        var i = 0;
        while (i <= 100) {
            b(i);
            i++;
        }
        c();
    },
}

module.exports = utils;




