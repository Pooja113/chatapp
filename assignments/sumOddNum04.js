let sumOddNum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 10 && arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};

let num = [9, 11, 12, 15, 21, 24];

console.log(sumOddNum(num));
