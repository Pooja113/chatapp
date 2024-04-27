let evenDuplicate = (arr) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }
    set.add(arr[i]);
  }
  return -1;
};

let data = [1, 2, 3, 4, 5];

console.log(evenDuplicate(data));
