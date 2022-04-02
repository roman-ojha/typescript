"use strict";
class Person {
    constructor(_person) {
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
const person1 = new Person({
    name: "razz",
    age: 50,
    note: "This note is from razz",
    id: 13,
});
person1.getPerson();
