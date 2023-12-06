type Task1 = {
  name: string;
  level: "low" | "medium" | "complicated";
};

function withTask(task: Task1) {
  // 'withTask' is the decorator factories which will take the new task of type 'Task1' provided while added this decorator

  // Now we will just going to return the whole decorator function inside this decorator factories
  return function <T, V extends Task1[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      // now we will just going to add the 'task' that we have provided from 'withTask' factory and return the new field with added value
      args.push(task);
      return args;
    };
  };
}

function withComplicatedTask2() {
  // Even now we can call the simple decorator factory and return the decorator factories with new task
  return withTask({
    name: "added task",
    level: "complicated",
  });
}

class Manager2 {
  // Now while adding the 'withTask' decorator we have to now pass the 'Task1' type of value which will get added to the 'tasks' fields inside 'Manager2' class
  @withTask({
    name: "added task",
    level: "low",
  })
  tasks: Task1[] = [];

  // because this is also a decorator factory we have to call it with '()'
  @withComplicatedTask2()
  extraTasks: Task1[] = [];
}

const manager2 = new Manager2();
console.log(manager2);
