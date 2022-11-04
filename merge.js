"use strict";
exports.__esModule = true;
function merge(collection_1, collection_2) {
    var indexC1 = 0;
    var indexC2 = 0;
    var arrayMerge = [];
    while (indexC1 < collection_1.length && indexC2 < collection_2.length) {
        // push less value into array
        if (collection_1[indexC1] > collection_2[indexC2]) {
            arrayMerge.push(collection_2[indexC2]);
            indexC2++;
        }
        else {
            arrayMerge.push(collection_1[indexC1]);
            indexC1++;
        }
    }
    ;
    // if collection_1 still has number
    while (indexC1 < collection_1.length) {
        arrayMerge.push(collection_1[indexC1]);
        indexC1++;
    }
    // if collection_2 still has number
    while (indexC2 < collection_2.length) {
        arrayMerge.push(collection_2[indexC2]);
        indexC2++;
    }
    return arrayMerge;
}
module.exports = merge;