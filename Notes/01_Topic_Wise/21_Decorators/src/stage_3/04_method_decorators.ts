class Project {
  // Here we have create the Project with some budget that we have

  budget: number = 900;

  @withBudget(10)
  // and to do an action on these budget we have to provide some budget on those action
  // In this case we have provide 10 budget while writing the Test action
  writeTests(name: string) {
    console.log("Tests are important!!!");
  }

  @withBudget(500)
  // Now here we have an action for fixing bugs on production which required 500 budget from the project
  fixBugInProduction() {
    console.log("Fixing bug in production .... :(((");
  }

  // Problem: what we want is we want to check whether while doing action the budget is finished or not
  // In that case we will just going to create a new decorator and check the available budget and if budget is not available to perform the action then we will console the error
}

const project = new Project();
project.writeTests("test");
project.fixBugInProduction();
project.fixBugInProduction();

function withBudget(actionBudget: number) {
  // Now here type of the 'context' is 'ClassMethodDecoratorContext' and it received 'This' means that type of the instance 'T'
  // And here we can see that we can only apply this decorator where the class should have 'budget' property
  return function <T extends { budget: number }>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    return function (this: T, ...args: any) {
      // this function will get called whenever we will call the methods which apply the 'withBudget' decorator
      // inside this function will going to get the instance of 'T' which is in this case object with {budget: number}
      // where inside 'args' we will going to get all the argument passed inside the function which apply 'withBudget' decorator
      const instance = this;

      if (instance.budget > actionBudget) {
        // if we have budget to do an action
        instance.budget = instance.budget - actionBudget;
        // subtracting the budget and applying method with the given args of the method to the instance
        target.apply(instance, args);
        // so it means that 'apply' function will going to call the required method which have used this decorator
      } else {
        console.error(
          `Insufficient budget for ${context.name.toString()}. Required ${actionBudget}, available ${
            instance.budget
          }`
        );
      }
      return target;
    };
  };
}
