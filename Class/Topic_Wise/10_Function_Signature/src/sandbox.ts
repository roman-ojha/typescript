let greet: Function;

// now we can make variable which hold a function and we can also make a variable which hold specific type of function function called function signature
// function signature describes the general structure of a function, what argument it take and what type of data it returns

// Example 1 =====

let fun1: (a: string, b: string) => void;
// now this variable hold a function which take 'a' as string and 'b' as string and return void
fun1 = (name: string, greeting: string) => {
  // now here this function follow signature we defined previously
  console.log(`${name} says ${greeting}`);
};

// Example 2 =====
let fun2: (a: number, b: number, c: string) => number;
// now this variable hold a function which take 'a' as number and 'b' as number and 'c' as string and return number
fun2 = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  }
  return numOne - numTwo;
};

// Example 3 =====
type person = { name: string; age: number };
let logDetails: (obj: person) => void;
logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
