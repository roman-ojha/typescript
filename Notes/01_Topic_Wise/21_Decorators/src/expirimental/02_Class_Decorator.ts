// State 2 Decorators: ===========================================
// Class Decorators:
// It will extends the functionality of classes
// So we will wrap a peace of code into function and apply that function as a decorator on the class

// creating Decorators:
function Logger(constructor: Function) {
  // NOTE: that 'Logger' function/decorator will get the construct of the class as an argument
  console.log("Logging the data");
  console.log(constructor);
}

// Adding the Logger function to the class
// @Logger
class Person {
  name = "Roman";
  constructor() {
    console.log("creating Object");
  }
}

// So, before creating the Object or without even creating the object of a Person it will first call the 'Logger' decorator and the we can implement some feature or extend the functionality of the class there after that we can create the object of 'Person'
// const person = new Person();
// console.log(Person);
// console.log(person);
