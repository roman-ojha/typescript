export class Invoice {
  constructor(
    readonly client: string,
    protected details: string,
    private amount: number
  ) {}

  public format(): string {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
