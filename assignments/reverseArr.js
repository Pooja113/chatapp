let reverseArr = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

let num = [9, 11, 12, 15, 21, 24];

console.log(reverseArr(num));
