function findBiggestValue(array, biggestValue = 0) {
    return array.length === 0 
        ? biggestValue 
        : findBiggestValue(array.slice(1), array[0] > biggestValue ? array[0] : biggestValue)
}

console.log(findBiggestValue([1, 2, 4, 3]))