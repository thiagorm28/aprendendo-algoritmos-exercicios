function quicksort(array) {
	// caso base, arrays com menos de 2 elementos, já estão ordenados
	if (array.length < 2) return array

	// caso recursivo
    let arrayHalf = Math.ceil(array.length/2)
	let pivot = array[arrayHalf]

	// subarray dos elementos menores que o pivot
    array.splice(arrayHalf, 1)
	let less = array.filter(function (element) {
		return element <= pivot
	})
	// subarray dos elementos maiores que o pivot
	let greater = array.filter(function (element) {
		return element > pivot
	})

	return quicksort(less).concat(pivot, quicksort(greater))
}

console.log(quicksort([4, 8, 7, 0]))