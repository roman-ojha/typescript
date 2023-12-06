/*
  *) Enums:
    -> Enums are special type in typescript which allow us to store a set of constants of keywords and associate them with a numeric value
*/
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data1: T;
}
const docOne: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.BOOK,
  // now this 'resourceType' will assign the associated enum number in this case 0
  data1: { name: "Roman" },
};
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  // here 'resourceType' will going to be 5
  data1: { name: "razz" },
};

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
