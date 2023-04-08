class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Ron");
p.greet();

function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

@loggedMethod
const a = () => {
  console.log(1);
};

