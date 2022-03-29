// now we will create new file called 'ListTemplate.ts' on './classes/ListTemplate.ts'

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// List template instance
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
