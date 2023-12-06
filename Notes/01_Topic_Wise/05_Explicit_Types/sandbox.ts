// explicit types ==========================
// so if you want to make the variable of some specific type and you dont want to assign the value when you declare then
let character: string;
// now 'character' variable is of string type
let age: number;
// age is of number type
let isLoggedIn: boolean;

// age="roman";
// now 'string' can't assign on number, same as for other variable

// arrays =======================
let ninjas: string[];
// now 'ninjas' is of type array of string
// ninjas.push("hello");
// we can't be able to push the string on declared array, firstly we have to assign value
ninjas = ["roman", "razz"];

let array: number[] = [];
array.push(10);
// now because we have initialized array we can push value on it

// union types =========================
let mixed: (string | number | boolean)[] = [];
// now this is the mixed array type which can consist of 'string', 'number' & 'boolean'
let moreMixed: (string | number | boolean | object)[] = [];
// this array can have type of 'string', 'number', 'boolean', 'object', 'array'
moreMixed.push({
  name: "Roman",
  number: 12,
});
moreMixed.push(["roman", 12, 14]);

let ArrayOfObject: ({} | [])[] = [];
ArrayOfObject.push({
  name: "Roman",
  number: 12,
});
console.log(ArrayOfObject);

let uid: string | number | boolean;
// we can use union type on other variable as well
uid = "123";
uid = 123;
uid = true;

// objects =====================================
let ninjaObject: object;
// now this is of type object
ninjaObject = { name: "roman", age: 31 };
ninjaObject = ["roman", "razz", 12];
// but here we allow to assign array on object type, because array is also kind of object

let newObject: {};
// now this is of type object;
let newArray: [];
// now this is of type object Array;

let defineObject: {
  name: string;
  age: number;
  beltColor: string;
};
// and we have declare the object called 'defineObject' which should have those declared field

defineObject = {
  name: "roman",
  age: 4321,
  beltColor: "red",
};
