type Task = {
  name: string;
  level: "low" | "medium" | "complicated";
};

class Manager1 {
  // Using decorator inside the field
  @withComplicatedTask
  // Here 'tasks' field is of type 'Task[]'
  tasks: Task[] = [];

  constructor() {
    console.log("Object is been created");
  }
}

// Implementing the field decorator
// inside the field decorator we will get the context of the fields of type 'ClassFieldDecoratorContext'
// and the Generic 'T' will be The type on which the class element will be defined. For a static class element, this will be the type of the constructor. For a non-static class element, this will be the type of the instance.
// and the Generic 'V' is the The type of the decorated class field. means that we will going to get the type of field where this decorator will get applied
// Because we know that we will going to get type of 'Task[]' fields inside the 'V' type we will going to extend 'V' type.
function withComplicatedTask<T, V extends Task[]>(
  target: undefined,
  // on field decorator we will not going to get the information about underlining target or prototype it means that 'target' will be undefined
  context: ClassFieldDecoratorContext<T, V>
) {
  // Now this decorator will add a new completed task into the field which will using this decorator

  // Note that this decorator will get called when ever this fill will run or without creating the instance of the class
  // and all of the code will get executed written inside this block
  console.log("Called decorator without creating an object");
  console.log(target);
  // Means 'Called decorator without creating an object' will get printed without creating an object

  // But bellow we can see that we are returning the function which will then return the args of type 'Task[]' where this function will only get executed whenever we will create the object of the class where this decorator is been applied
  return function (args: V) {
    console.log("Called function when we create an object");
    // because 'args' is of type 'Task[]' we can push the new element inside the Task array
    args.push({
      name: "added task",
      level: "complicated",
    });

    // After that we can now return the args which is actually the field value which contain the newly added data
    return args;
  };
}

const manager1 = new Manager1();
console.log(manager1);
