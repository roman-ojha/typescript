// NOTE: that when you are extend the class with inheritance we need to be careful with decorators because the inherited class won't receive the functionality of the decorator
@Frozen
class IceCreamComponent {}

function Frozen(constructor: Function, context: ClassDecoratorContext) {
  // What we are trying to de here is prevent this class from being extended or created the super class from this class
  // So we are freezing the class so that it can't be able to get extended
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

console.log(Object.isFrozen(IceCreamComponent));

// Error:
class FroYo extends IceCreamComponent {}
