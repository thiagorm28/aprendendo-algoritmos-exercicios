"use strict"

function findSmallestIndex(array) {
  var smallestElement = array[0]
  var smallestIndex = 0

  for (var i = 1 i < array.length i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

function selectionSort(array) {
  var sortedArray = []
  var copyArray = array.slice()
  var length = array.length

  for (var i = 0 i < length i++) {
    var smallestIndex = findSmallestIndex(copyArray)
    sortedArray.push(copyArray.splice(smallestIndex, 1)[0])
  }

  return sortedArray
}

const sourceArray = [5, 3, 6, 2, 10]
const sortedArray = selectionSort(sourceArray)

console.log("Source array - ", sourceArray)
console.log("New sorted array - ", sortedArray)