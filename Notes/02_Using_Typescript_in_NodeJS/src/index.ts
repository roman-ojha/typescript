import express from "express";
const app = express();

app.get("/", (req, res) => {
  (req as any).name = "body";
  // in here if we will not cast the type then it will throw error saying :Property 'name' does not exist on type
});

app.get("/get", (req: any, res) => {
  // or to solve error you can so (req: any)
  // but now we will not get any suggestion
  req.name = "body";
  add(1);
});

const add = (a: number, b?: number): number => {
  // if we will not get value from optional parameter then we will do this:
  if (b) {
    return a + b;
  }
  return a;
};

const sub = (a: number, b?: number): number => {
  // or if you know that b will not going to be undefine then you can use '!'
  // but this is not recommended to use all the time
  // you can only use when it will rarely
  return a - b!;
};

const add1 = (a: number, b?: number): number => {
  // but what another thing that you can do to ignore is to use 'ts-ignore'
  // @ts-ignore
  return a - b;
};

const add2 = (a: number, b?: number): number => {
  // other way is you can cast this option parameter as well
  return a - (b as number);
};

interface Params {
  // we can use interface like this as well
  a: number;
  b?: number;
}
const fun = (x: Params): number => {
  return x.a + (x.b as number);
};

// but except interface we can define a type
type Params2 = {
  a: number;
  b?: number;
};
const fun1 = (x: Params2): number => {
  return x.a + (x.b as number);
};

//NOTE: to make simpler what you can do is to use 'interface' of Object and types for everything else

type AddFun = (x: Params) => number;
// so here type 'AddFun' is of function which will take interface 'Params' as parameter and return number
const addNum: AddFun = (x) => {
  return x.a + (x.b as number);
};
addNum({ a: 1, b: 2 });

app.listen(8080, () => {
  console.log("started server");
});
