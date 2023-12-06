// we use any type when we want to change that variable to any kind of type

let age: any = 12;
age = "roman";
age = true;
age = {
  name: "Roman",
  boolean: true,
};
age = ["hello", "world"];

let anyArray: any[] = [];
// now we can insert any type on this array
anyArray.push("hello");
anyArray.push(12);
anyArray.push(true);
anyArray.push({
  name: "Roman",
});

let anyObject: { name: any; age: any; isBool: any };
// object field of any type
