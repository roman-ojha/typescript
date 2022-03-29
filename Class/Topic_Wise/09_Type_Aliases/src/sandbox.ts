const logDetail = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
const greet = (user: { name: string; uid: string | number }) => {
  // now here 'user' should of type object and and inside the object we also declare field type
  console.log(`${user.name} says hello`);
};
const greetAgain = (user: { name: string; uid: string | number }) => {
  // here we are making another function which take the same type as 'greet' function is taking at that time it is not good thing to write that same type again and again. in that case we can make our own type 'Aliases'
  console.log(`${user.name} says hello`);
};

type StringOrNum = string | number;
// now 'StringOrNum' is type which is of 😆 'string' or 'number'
type objWithName = { name: string; uid: StringOrNum };
const fun1 = (uid: StringOrNum, item: string) => {
  // so, here we can now take Aliases type
  console.log("hello");
};
const fun2 = (user: objWithName) => {
  // now here we are again making another type 'objWithName'
  console.log(`${user.name} says hello`);
};
