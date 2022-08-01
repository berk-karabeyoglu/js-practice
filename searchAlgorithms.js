var cities = [
  "Yalova",
  "İzmir",
  "İstanbul",
  "Ankara",
  "Bolu",
  "Uşak",
  "Manisa",
];

//* Linear Search
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([10, 45, 21, 5, 1, 2, 3, 4], 21));

console.log(linearSearch(cities, "Yalova"));

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (val === arr[mid]) return mid;
    else if (val < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 21, 28, 30], 21));

function naiveSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("BREAK!");
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
