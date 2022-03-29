/*
  -> the another thing that we can use in typescript that we can't in javascript is an interface
  -> Interface allows us to enforce a certain structure of a class or and object
  -> we can use it to describe what properties and what methods and what the types of those properties and return types of those methods are
  -> we don't use interface to generate or construct object like class, we just use it to enforce a certain type of structure within class or objects
*/

import { Invoice } from "./classes/Invoice.js";

// Interface ================================
// to make interface
interface IsPerson {
  // here we can say what properties and IsPerson object should have and what type they should be

  // so now every object that describes itself as 'IsPerson' should have:
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  // so here now 'me' variable describe the interface IsPerson
  name: "Roman",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spend ${amount}`);
    return amount;
  },
};

let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};
greetPerson(me);
// ========================================
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

const formTag = document.getElementsByClassName("new-item-form")[0]!;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

formTag.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, detail.value, amount.valueAsNumber);
});
