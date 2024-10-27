"use strict"

function findKey(array) {
  array.forEach((object, index) => {
    if (object === 'key') {
      console.log('Key Found in box: ' + index)
    } else if (Array.isArray(object)) {
      findKey(object)
    }
  })
}
const boxArray = [null, null, null, [null, 'key'], null]
findKey(boxArray)