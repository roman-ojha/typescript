//https://www.typescriptlang.org/docs/

// Tuples
// this is kind of like as array
// the different is the types of data in each position in a tuple is fixed once it's been initialized

// array
let arr = ["roman", 13, true];
arr[0] = "hello";
// we can change the value of any position
arr[1] = "world";
arr = [30, false, "now"];

// tuple
let tup: [string, number, boolean] = ["roman", 12, true];
// to define tuple by using square brackets and saying what types we expect to be in each position
// tup[0]=false;
// we can't change value of different type in tuple
tup[0] = "hello";

let student: [string, number];
student = ["roman", 432];

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
  let values: [string, string, number] = [
    toFrom.value,
    detail.value,
    amount.valueAsNumber,
  ];
  // now we can use tuple to store the value because we are passing the same argument on different object
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});
