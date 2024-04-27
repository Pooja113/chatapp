let missingNumber = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
};

let data = [1, 2, 3, 4, 5];
console.log(missingNumber(data));
