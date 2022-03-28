// declare variable:
let character = "roman";
// string type
let age = 30;
// number type
// in typescript we don't use integer for number and float for decimal number
// but when we declare age = 30 typescript set it as an integer and in future it can't be able to change
let isBlackBelt = false;
// boolean type

character = "hello";
// string can be able to change to string
// character = 20;
// string can't be able to change to other type
// and that is apply to all the type

age = 40;
isBlackBelt = true;
// NOTE: we don't have to declare variable as type int,bool etc.. typescript use inference and it based on the value it assign the type

const circ = (diameter: number) => {
  // so here we can define the type that we want to accept as and parameter
  return diameter * Math.PI;
};

// console.log(circ("hello"));
// here we are passing 'string' but inside the function are are expecting to get number
console.log(circ(10));

// NOTE: typescript check code during development for the less error in the browser
