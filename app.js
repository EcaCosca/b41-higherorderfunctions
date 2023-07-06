function wrapperFunction(callback) {
    const condition = Math.random() > 0.5 ? true : false;
    return condition && callback();
  }
  
  function callbackFunction() {
    console.log("I'm being called by the wrapper function");
  }
  
  wrapperFunction(callbackFunction); // If condition is true, a message is printed
  
  function makeIncrementer(increment) {
    return function (value) {
      return value + increment;
    };
  }
  
  const incrementByOne = makeIncrementer(1);
  console.log("incrementByOne")
  console.log(incrementByOne)
  const incrementByFive = makeIncrementer(5);
  console.log(incrementByFive)
  const incrementByTen = makeIncrementer(10);
  console.log(incrementByTen)
  
  console.log(incrementByOne(10)); // 11
  console.log(incrementByFive(10)); // 15
  console.log(incrementByTen(10)); // 20
  
  // Higher-order array methods
  
  let fruits = ["🍊", "🍎", "🍌", "🍊", "🍊", "🍓", "🍌"];
  
  // map
  
  const peeledFruits = () => {
    return fruits.map((fruit) => `${fruit} has been peeled`);
  };
  // ["🍊 has been peeled", "🍎 has been peeled", "🍌 has been peeled", "🍊 has been peeled", "🍊 has been peeled", "🍓 has been peeled", "🍌 has been peeled"]
  
  const peeledBananas = () => {
    return fruits.map((fruit) =>
      fruit === "🍌" ? `${fruit} has been peeled` : fruit
    );
  };
  // ["🍊", "🍎", "🍌 has been peeled", "🍊", "🍊", "🍓", "🍌 has been peeled"]
  
  // filter
  
  const onlyOranges = () => {
    return fruits.filter((fruit) => fruit === "🍊");
  };
  // ["🍊", "🍊", "🍊"]
  
  // find
  const firstOrange = () => {
    return fruits.find((fruit) => fruit === "🍊");
  };
  // "🍊"
  
  const firstWatermelon = () => {
    return fruits.find((fruit) => fruit === "🍉");
  };
  // undefined
  
  // reduce
  
  const juice = () => {
    return fruits.reduce((previousValue, currentFruit) => {
      console.log(previousValue); // In the first iteration, it's the first element of the array
      console.log(`Pressing ${currentFruit} in a glass with ${previousValue}`);
      return "🧃";
    });
  };
  