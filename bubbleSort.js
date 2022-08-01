//* JS Sort Method

function numberOrder(num1, num2) {
  return num1 - num2;
}

let arr = [3, 10, 21, 17, 13, 7];
console.log(arr.sort(numberOrder));

//* Bubble Sort

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(j, j + 1);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function bubbleSort2(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([7, 3, 21, 10, 6, 9, 25, 13]));
// console.log(bubbleSort2([11, 5, 21, 30, 42, 32, 6, -5, 7, 15, 33]));
