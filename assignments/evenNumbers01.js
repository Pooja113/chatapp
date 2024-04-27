let evenNumbers = (s, e) => {
  for (let i = s; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
let start = 10;
let end = 100;

evenNumbers(start, end);
