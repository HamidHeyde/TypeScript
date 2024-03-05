console.log('\n', '---------Factory---------', '\n');

class CarFactoryClass {
  constructor(private name: string) {}
  private getCar = (): string => this.name

  sayHello = (): string => `Hello, I'm a ${this.name}`
}


const myBMW = new CarFactoryClass("BMW")
console.log(myBMW.sayHello())

const myPorsche = new CarFactoryClass("Porsche")
console.log(myPorsche.sayHello())