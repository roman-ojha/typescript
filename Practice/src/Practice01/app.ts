interface PersonObj {
  name: string;
  age: number;
  note: string;
  id: number;
  speak?(snt: string): void;
  dance?(name: string): void;
}

class Person {
  person: PersonObj;
  constructor(_person: PersonObj) {
    this.person = _person;
  }
  getPerson() {
    console.log(`name: ${this.person.name}
age: ${this.person.age}
note:${this.person.note}
id:${this.person.id}             
`);
  }
}

const person1: Person = new Person({
  name: "razz",
  age: 50,
  note: "This note is from razz",
  id: 13,
});
person1.getPerson();
