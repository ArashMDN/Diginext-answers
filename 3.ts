// selection sort algorithm
function minSwaps(arr: number[]) {
  let swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      swaps++;
    }
  }
  return swaps;
}

let testArr = [7, 1, 3, 2, 4, 5, 6];
console.log(minSwaps(testArr));
