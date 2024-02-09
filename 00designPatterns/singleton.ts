class Singleton {
  private static instance: Singleton | null = null
  private constructor (private someVariable?: number) {}

  static getInstance = () => {
    return !this.instance ? new Singleton() : this.instance
  }

  getVariable = () => this.someVariable
  setVariable = (value: number) => this.someVariable = value
}

const mySingleton1 =  Singleton.getInstance()
console.log(mySingleton1.getVariable())
mySingleton1.setVariable(70)

const mySingleton2 = Singleton.getInstance()
console.log(mySingleton2.getVariable())
mySingleton2.setVariable(15)

console.log("1 => ", mySingleton1.getVariable())
console.log("2 =>", mySingleton2.getVariable())
console.log(mySingleton1 === mySingleton2)