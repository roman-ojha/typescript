import { HasFormatter } from "../interfaces/HasFormatter";
export class Invoice implements HasFormatter {
  // if we want to implement the 'HasFormatter' interface inside a class then we have to do like this
  // so now we are saying this class must follow the structure of 'HasFormatter' interface
  constructor(
    readonly client: string,
    protected details: string,
    private amount: number
  ) {}

  public format(): string {
    // and we had already implemented that interface because 'HasFormatter' only have this function and we have implement that function
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
  // so now we can be sure that every object that we created using this class follows this 'HasFormatter' interface
}
