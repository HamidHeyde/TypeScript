console.log('\n', '---------Singleton---------', '\n');

class singleton {
  private static instance: singleton | null = null;
  private constructor(private someVariable?: number) {}

  static getInstance = () => {
    return !this.instance ? new singleton(0) : this.instance;
  };

  getVariable = () => this.someVariable;
  setVariable = (value: number) => (this.someVariable = value);
}

const singleton1 = singleton.getInstance()
console.log("1st Instance", singleton1.getVariable())
singleton1.setVariable(70)
console.log("1st Instance", singleton1.getVariable())
console.log(singleton1)

const singleton2 = singleton.getInstance()
console.log("2nd Instance", singleton2.getVariable())
console.log(singleton2)

console.log(singleton1===singleton2)
