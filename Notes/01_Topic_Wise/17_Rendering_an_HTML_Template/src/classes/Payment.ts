import { HasFormatter } from "../interfaces/HasFormatter";
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    protected details: string,
    private amount: number
  ) {}

  public format(): string {
    return `${this.recipient} is  owed £${this.amount} for ${this.details}`;
  }
}
