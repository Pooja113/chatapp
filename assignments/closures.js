const checkClosure = () => {
  for (let index = 0; index < 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
  console.log("first");
};
checkClosure(); 