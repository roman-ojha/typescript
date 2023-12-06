/*
  -> With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.
*/

// A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
// For example, given the decorator: @sealed we might write the sealed function as follows:
function sealed(target: any) {
  // do something with 'target'
}

// Decorator Factories: =========================
// If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.
// We can write a decorator factory in the following fashion:
function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target: any) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}

// Decorator Composition:=======================
// Multiple decorators can be applied to a declaration, for example on a single line:
// @f @g x
// On multiple lines:
// @f
// @g
// x
// When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).
// As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:
// 1. The expressions for each decorator are evaluated top-to-bottom.
// 2. The results are then called as functions from bottom-to-top.

// If we were to use decorator factories, we can observe this evaluation order with the following example:
function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  // method where we have added multiple decorator
  // @first()
  // @second()
  method() {}
  /*
   * these decorator will call automatically without creating the class of 'ExampleClass'
   * Output:
    first(): factory evaluated
    second(): factory evaluated
    second(): called
    first(): called
  */
}

/*
  Decorator Evaluation
    There is a well defined order to how decorators applied to various declarations inside of a class are applied:
      1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
      2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
      3. Parameter Decorators are applied for the constructor.
      4. Class Decorators are applied for the class.
*/

export { ExampleClass };
