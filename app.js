// ONE FUNCTION THAT TAKES A FUNCTION AS AN ARGUMENT
function hofFunction (func) {
    func()
    func()
    func()
}

const arrowGreeter = () => {
    console.log("Hello World!")
}

// hofFunction(arrowGreeter)
// hofFunction(arrowGreeter)
// hofFunction(arrowGreeter)

// --------------------------

// ONE FUNCTION THAT TAKES A FUNCTION AS AN ARGUMENT and using it in the return
function wrapperFunction(callback) {
    const condition = Math.random() > 0.5 ? true : false;
    return condition && callback();
}

function callbackFunction() {
    console.log("I'm being called by the wrapper function");
}

wrapperFunction(callbackFunction); // If condition is true, a message is printed

// --------------------------

// ONE FUNCTION that puts A FUNCTION AS A return

  function makeIncrementer(increment) {
    return function (value) {
      return value + increment;
    };
  }
  
  const incrementByOne = makeIncrementer(1);
//   const incrementByOneAlternative = (argument) => argument + 1;
//   console.log("incrementByOne")
//   console.log(incrementByOne)
  const incrementByFive = makeIncrementer(5);
//   console.log(incrementByFive)
  const incrementByTen = makeIncrementer(10);
//   console.log(incrementByTen)
  
//   console.log(incrementByOne(10)); // 11
//   console.log(incrementByOne(42)); // 11
//   console.log(incrementByFive(10)); // 15
//   console.log(incrementByTen(10)); // 20
  
  // Higher-order array methods
  
  let fruits = ["🍊", "🍎", "🍌", "🍊", "🍊", "🍓", "🍌"];
  
  // map
  
  const peeledFruits = () => {
    return fruits.map((fruit) => `${fruit} has been peeled`);
    // return [] map will return an entire new array without changing the original one
  };
  // ["🍊 has been peeled", "🍎 has been peeled", "🍌 has been peeled", "🍊 has been peeled", "🍊 has been peeled", "🍓 has been peeled", "🍌 has been peeled"]
  const peeledFruitResult = peeledFruits()
//   console.log(peeledFruitResult);
//   console.log(fruits);
  
  const peeledBananas = () => {
      return fruits.map((fruit) =>
      fruit === "🍌" ? `${fruit} has been peeled` : fruit
      );
    };
    // ["🍊", "🍎", "🍌 has been peeled", "🍊", "🍊", "🍓", "🍌 has been peeled"]
    const peeledBananasResult = peeledBananas()
    // console.log(peeledBananasResult);
    // console.log(fruits);


  // filter
  
  const onlyOranges = () => {
    return fruits.filter((fruit) => fruit === "🍊");
  };
  const onlyOrangesResult = onlyOranges()
//   console.log(onlyOrangesResult);
  // ["🍊", "🍊", "🍊"]
//   console.log(fruits);
  
  // find
  const firstOrange = () => {
    return fruits.find((fruit) => fruit === "🍊");
  };
  const firstOrangeResult = firstOrange();
//   console.log(firstOrangeResult);
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
//   const juiceResult = juice()
//   console.log(juiceResult);

const numArr = [15,12,465,89,5,0.5,-5]

const reducerFunc = (arr) => {
    return numArr.reduce((total, num)=> total+num)
}

const reducerResult = reducerFunc()
console.log(reducerResult);