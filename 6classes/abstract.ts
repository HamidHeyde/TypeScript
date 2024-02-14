console.log('\n', '---------Abstract Classes---------', '\n');

/**
 * Abstarct classes like interfaces provide a bluprint of how the class should look like.
 * However, in Interfaces => there could be no implementation
 * but Abstract classes => can contain some implementation
 */

abstract class Car {
  constructor( private carName: string){}

  // will be shared
  getCar = (): string => this.carName
  setCarName = (carName: string): void => { this.carName = carName }
  
  // needs to be implemented by the children
  abstract drive(): string
}

// const myCar  = new Car()  <<== Error: can not be instantiated like this

class BMWCars extends Car {
  drive = (): string => `driving a BMW, hop in`
}

const myCar = new BMWCars("BMW")
console.log(myCar)