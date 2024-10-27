function binary_search(list, item) {
    let start = 0
    let end = list.length - 1
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2)
      const guess = list[mid]
  
      if (guess === item) {
        return mid
      } else if (guess > item) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  
    return null
  }
  
  const my_list = [1, 3, 5, 7, 9]
  
  console.log(binary_search(my_list, 3)) // 1
  console.log(binary_search(my_list, -1)) // null