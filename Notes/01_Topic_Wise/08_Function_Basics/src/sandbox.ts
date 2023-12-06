let greet = () => {
  console.log("hello", "world");
};
// now 'greet' is of type function
// greet = "hello";
// can't assign other type on function type

let functionType: Function;
// if we want to declare variable of type function
functionType = () => {
  console.log("hello");
};

let ArrayFunction: (() => {})[] = [];

const add = (
  a: number,
  b: number,
  // if function want to take parameter of specific type
  c: number | string,
  // and we can take union type as well
  d?: number,
  // if you want to take optional parameter which could not be include while calling function then we have to put: ? mark on that case
  // if we don't pass value of option parameter then it's value will be 'undefined'
  e: number = 20
  //   if we want to have default value for optional parameter then you have to do this
  //   NOTE: when we take default or optional parameter it always need to be at the end of parameter
) => {
  console.log(a + b);
};
add(5, 10, 15);

const minus = (a: number, b: number) => {
  return a + b;
};
let result = minus(10, 7);
// when typescript function is returning value at that time the variable which is been assigned get the type which is being returned
// so typescript can infer the type that is returned
// result = "roman";
// can't assign other type on type number 'result'

// if you want to explicitly declare the return type you can do this by:
const retFun = (a: number = 10, b: number = 20): number => {
  return a + b;
};
const retNum = retFun();

// what if we are not returning anything from the function at that time it return a value called void
const notRetFun = () => {
  console.log("hello");
};
const notRetVar = notRetFun();

// same as previous
const retVoid = (): void => {
  console.log("hello");
  //   but when it will compile to javascript at that time it become undefined
};
const voidVar = retVoid();
