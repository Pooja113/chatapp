let vowels = (str) => {
  let vowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowels += 1;
    }
  }
  return vowels;
};

let data = "Hello";

console.log(vowels(data));
