let names = ["luigi", "mario", "yoshi"];
names.push("toad");

// names="hello"
// can't change array to another type

// names[0]=3;
// names.push(3);
// so here we can see that if we want to push 'number' type on list of 'string' type then we are not being able to do that

let numbers = [10, 20, 30, 40, 50];
numbers.push(60);
// numbers.push("roman");
// can't push 'string' on 'number'

let mixed = ["roman", 40, "razz", 65, true];
// but we can have a mixed type array if we declare it at the first time
// now 'mixed' array can have 'string', 'number', 'bool'
mixed.push("another");
mixed.push(10);
mixed[0] = 30;

// Objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
  // these works as same way as variable, if we decare the type we can't change it
};

ninja.age = 40;
ninja.name = "roman";
// ninja.age="ojha";
// age is number not string

// ninja.skills = ["hello"];
// and we can't be able to add another property on the object it should define at the start

ninja = {
  name: "roman",
  belt: "orange",
  age: 40,
};
// but we can change the object with have the same property

// To define Array of An object:
let userTestStatus: { id: number; name: string }[] = [
  { id: 0, name: "Available" },
  { id: 1, name: "Ready" },
  { id: 2, name: "Started" },
];
userTestStatus[1].name;

// Defines the type of key:value pair of an object
const obj: { [key: string]: Function } = {
  // Now this object only accept the object type having key as string and value as Function
  add: function (a: number, b: number) {
    return a + b;
  },
};
