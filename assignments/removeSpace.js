let removeSpaces = (str) => {
  let i = 0;
  let newstr = [];
  while (i < str.length) {
    if (str[i] !== " ") {
      newstr.push(str[i]);
    }
    i++;
  }
  return newstr.join("");
};

let data = "Hey how are you !";
console.log(removeSpaces(data));
