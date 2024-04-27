let change = 0;
let counter = (num) => {
  num = num + change;
  console.log(num);
  change++;
};

counter(10);
counter(10);
counter(10);
counter(10);
