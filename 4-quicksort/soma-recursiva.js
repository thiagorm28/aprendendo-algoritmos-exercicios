function somaRecursiva(array) {
  if (array.length == 0) return 0
  return array[0] + somaRecursiva(array.slice(1))
}

console.log(somaRecursiva([1, 2, 3]))