// Classes:
// Typescript in classes is vary similar to classes in Javascript
class Invoice {
  // create object based on type
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(): string {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
// creating object based on 'Invoice' class
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
// now 'invoices' variable can only consist of array of type 'Invoice'
invoices.push(invOne);
invoices.push(invTwo);

const formTag = document.getElementsByClassName("new-item-form")[0]!;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

formTag.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, detail.value, amount.valueAsNumber);
});
