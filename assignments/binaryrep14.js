let binaryRepresent = (number) => {
  let binary = [];
  while (number > 0) {
    let res = number % 2;
    binary.push(res);
    number = parseInt(number / 2);
  }
  return binary.join("");
};

console.log(binaryRepresent(5));
