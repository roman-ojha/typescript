/*
  -> now we will create another file called 'HasFormatter.ts' inside './interfaces/'
  -> and interface with class explanation is on './classes/Invoice.ts'
*/

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;
// now in the future these variable must be of type "HasFormatter"

// now what we can do is create new instance of the 'Invoice' and store it into dock one because we know that the invoice implement this "HasFormatter" interface
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
// now only those object which implement 'HasFormatter' interface can be stored inside the array
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

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
  let doc: HasFormatter;
  // now the thing that we implement on interface we will use on our project like this
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, detail.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, detail.value, amount.valueAsNumber);
  }
  console.log(doc);
});
