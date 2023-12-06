/*
  *) Generic:
    -> Generic allow us to create reusable blocks of code which can be use with different types
*/

// GENERICS ===========================
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne);
// console.log(docOne.name);
// now here if we will try to access 'docOne.name' we can't be able to do that because when we pass in an object into this function we are not specifying exactly what this object should be

// to use Generic we can add <T> in front of the function and we will pass 'T' as the argument
// so what this does is capture what ever item we pass in to the function and it captures what properties are going to be on it if it's an object and when we return it then it's going to know what properties are on that object
const addUID1 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docTwo = addUID1({ name: "yoshi", age: 40 });
console.log(docTwo.name);
console.log(docTwo.age);
// now we can access the object properties that we have pass as and argument

// also we can specify that what type we want to pass while calling function by adding 'extends object' so it means that what every is passed in the type must extend this object so it must be an object
const addUID2 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
// let docThree = addUID2("Hello");
// now "Hello" is now as object so we can't  pass that as argument
let docThree = addUID2({ name: "yoshi", age: 40 });

// we can again specify more by using specific properties
const addUID3 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
// let docFour = addUID3({age: 40 }); // now this is not allow
let docFour = addUID3({ name: "yoshi", age: 40 });

// With Interface ----------------------
interface Resource<T1, T2> {
  // here we want to make 'data1' and 'data2' property flexible which could contain any type so to make that we have to pass generic on interface
  uid: number;
  resourceName: string;
  data1: T1;
  data2: T2;
  // now 'data1' & 'data2' is going to be whatever type that we specify when we create and object which implements this interface
}
const docFive: Resource<object, string> = {
  // now here which making object of type 'Resource' we have to specify what type that generic would going to be
  uid: 10,
  resourceName: "person",
  data1: { name: "Roman" },
  data2: "Roman",
};
const docSix: Resource<object, string[]> = {
  uid: 10,
  resourceName: "person",
  data1: { name: "Roman" },
  data2: ["hello", "world"],
};

// With Class --------------------------
class Client<T> {
  name: string;
  data: T;
  constructor(n: string, d: T) {
    this.name = n;
    this.data = d;
  }
}
const cObj: Client<object> = new Client("roman", {
  name: "roman",
  is: true,
});
const cObj2: Client<{ name: string; is: boolean }> = new Client("roman", {
  name: "roman",
  is: true,
});

// ========================

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const formTag = document.getElementsByClassName("new-item-form")[0]!;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

formTag.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, detail.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, detail.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
