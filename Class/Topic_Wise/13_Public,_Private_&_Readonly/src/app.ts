class Invoice {
  // in default all the the property and method are public
  readonly client: string = "roman";
  // 'readonly' can be readable inside the class or outside of the class but we can't change the value of this after it constructed
  protected details: string = "programer";
  private amount: number = 345;

  constructor(
    readonly client1: string,
    protected details1: string,
    private amount1: number // now we can also construct variable by passing it as parameter and these variable are also accessible by function and outside the class as per visibility of that variable
  ) // we need to use access modifier to get access outside
  {}

  public format(): string {
    return `${this.client1} owes £${this.amount1} for ${this.details1}`;
  }
}

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
