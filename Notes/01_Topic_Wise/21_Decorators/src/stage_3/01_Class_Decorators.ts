// @printDecoratorData
@withEmploymentDateOnPrototype
@withEmploymentDate
// Applying the decorators which will get called even without creating the instance of 'Manager'
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the Manager class");
  }
}
const manager = new Manager();
console.log(manager);

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  // 'value' is the constructor function of the class where this decorator is been applied
  // 'context' is the class decorator context
  // If we have added 'ClassDecoratorContext' type on 'context' then we cannot add this decorator function inside other thing like 'method', 'field' etc..., this decorator is only applicable for class level
  // IF we have added 'DecoratorContext' as type on 'context' then we can use this decorator function on every thing where we can apply decorators

  console.log("value: ");
  console.log(value);
  console.log("context: ");
  console.log(context);
  context.addInitializer(() => {
    console.log("Initialized class " + context.name);
  });
}

// Now we will create a decorator function will will going to add new prototype field 'employmentDateOnPrototype' on all the classes which apply this decorator
function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.employmentDateOnPrototype = new Date().toISOString();
}

// Now bellow function will going to add the new field 'employmentDate' field inside the all class which will implement this decorator
function withEmploymentDate<T extends { new (...args: any[]): {} }>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  // so we are accepting a 'baseClass' as an argument where the 'baseClass' is the class which will implement this decorator
  // Here we are returning the class which will extends the 'baseClass'
  return class extends baseClass {
    // now here we can add a new fields inside this class
    employmentDate = new Date().toISOString();
    constructor(...args: any[]) {
      // and passing all the argument to the super class which implement this 'withEmploymentDate' decorator
      super(...args);
      console.log("Adding employment date to " + baseClass.name);
    }
  };
}

// If we are using const for creating the decorator then it first needs to initialized before using on as decorator
const exDecorator = (
  constructor: Function,
  context: ClassDecoratorContext
) => {};

@exampleDecorator
@exDecorator
class Example {
  name = "Roman Ojha";
}

const ex = new Example();
console.log(ex);

function exampleDecorator(
  constructor: Function,
  context: ClassDecoratorContext
) {}
