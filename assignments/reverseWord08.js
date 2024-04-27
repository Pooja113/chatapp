let reverseWord = (str) => {
  let arr = str.split(" ");
  let res = [];
  for (let word = 0; word < arr.length; word++) {
    let eachWord = arr[word].split("");
    for (let i = 0; i < eachWord.length / 2 - 1; i++) {
      let temp = eachWord[i];
      eachWord[i] = eachWord[eachWord.length - i - 1];
      eachWord[eachWord.length - i - 1] = temp;
    }
    res.push(eachWord.join(""));
  }
  return res.join(" ");
};

var data = "Hello How are you?";

console.log(reverseWord(data));
